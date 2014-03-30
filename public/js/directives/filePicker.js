angular.module('mean.directives')
  .directive('filePicker', ['$compile', '$http', '$window', function ($compile, $http, $window) {
      return {
        restrict: 'C',
        controller: function($scope, $attrs, $window) {

          $scope.pickFiles = function(event) {
            event.preventDefault();
            var $element = angular.element(event.currentTarget).closest(".file-picker");
            var $attrs = $element.data();
            var $button = $element.find(".button");
            var inkBlob; // Value set after filepicker used in Aviary onSave

            $window.filepicker.setKey("Acw0VeSQcTCSvPgAV5GEqz");

            var extensions = [".png", ".jpg", ".gif"].concat($scope.$eval($attrs.extensions));

            $button.addClass('button-loading');

            $('#filepickerModal').modal('show');

            var featherEditor = window.featherEditor = new Aviary.Feather({
              apiKey: '00a8f855dcd6e4ff',
              apiVersion: 2,
              cropPresets: [["Square", "1:1"]],
              cropPresetDefault: "Square",
              cropPresetsStrict: true,
              onClose: function() {
                resetModal();
              },
              onSave: function(imageID, newURL) {
                var options = {
                  url: $attrs.attachmentPath,
                  original: inkBlob.url,
                  crop: newURL,
                  attachment: $attrs.attachment,
                  size: $attrs.cropSize
                };

                saveCrop(options, function(filepickerCropUrl){
                  if (!$scope.$eval($attrs.resource)[options.attachment]) {
                    $scope.$eval($attrs.resource)[options.attachment] = { crops: {}};
                  }

                  $scope.$eval($attrs.resource)[options.attachment].crops['_'+options.size] = filepickerCropUrl;
                  featherEditor.close();
                });
              },
              appendTo: 'modalContent'
            });

            function launchEditor(inkBlob) {
              var preview = $('<img id="preview" alt="Preview" style="display: none">').get(0);
              preview.src = inkBlob.url;

              featherEditor.launch({
                image: preview,
                url: inkBlob.url,
                forceCropPreset: ['Square','200x200'],
                forceCropMessage: 'Crop your picture:'
              });
            }

            function saveCrop(options, cb) {
              var payload = {attachments:[]};

              payload.attachments.push({
                name: options.attachment + '.original',
                url: options.original
              });

              filepicker.store({url: options.crop}, function(InkBlob){
                payload.attachments.push({
                  name:  options.attachment + '.crops._' + options.size,
                  url: InkBlob.url
                });

                $scope.$apply(function() {
                  saveAttachment(options.url, payload, function(){
                    cb(InkBlob.url);
                  });
                });
              });
            }

            function saveAttachment(url, payload, cb) {
              $http.put(url, payload).success(function(data, status, headers) {
                resetModal();
                if (cb) cb();
              });
            }

            function resetModal() {
              $button.removeClass('button-loading');
              $('#modalContent').html('<iframe id="filepickerFrame"></iframe>');
              $('#filepickerModal').modal('hide');
            }


            $window.filepicker.pickAndStore({
              extensions: extensions,
              container: "filepickerFrame",
              services: ["COMPUTER", "FACEBOOK", "DROPBOX", "URL"],
              openTo: "COMPUTER"
            }, {
              location: "S3",
              path: "/assets/",
              access: "public"
            }, function (InkBlobs){

              inkBlob = InkBlobs[0];

              if ($attrs.cropSize) {
                return launchEditor(inkBlob);
              }

              var payload = {
                attachment: $attrs.attachment,
                url: inkBlob.url
              };

              saveAttachment($attrs.attachmentPath, payload, function(){
                $scope.$eval($attrs.resource)[$attrs.attachment].original = InkBlob.url;
              });

            }, function (FPError){
              console.warn(FPError);
            })
        };
        }
      };
    }])