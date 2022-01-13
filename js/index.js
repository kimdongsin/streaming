(function () {
    let param = get_query();

    let video1 = param.video1;
    let video2 = param.video2;
    let image = param.image;

    // 동영상, 이미지 경로 
    let videoUrl = 'https://yoonpin0514.cafe24.com/resources/videos/';
    let imageUrl = 'https://yoonpin0514.cafe24.com/resources/images/';

    function get_query() {
        var url = document.location.href;
        var qs = url.substring(url.indexOf('?') + 1).split('&');
        for (var i = 0, result = {};
            i < qs.length; i++) {
            qs[i] = qs[i].split('=');
            result[qs[i][0]] = decodeURIComponent(qs[i][1]);
        }
        return result;
    }

    function getVideo() {
        let videoTag1 = document.querySelector('#video1');
        let videoTag2 = document.querySelector('#video2');

        videoTag1.setAttribute('src', videoUrl + video1 + '.mp4');
        videoTag2.setAttribute('src', videoUrl + video2 + '.mp4');
    }

    function getImage() {
        let imageTag = document.querySelector('#image');
        imageTag.setAttribute('src', imageUrl + image + '.jpg');
    }

    function downloadVideo() {
        let videoDownload1 = document.querySelector('#videoDownload1');
        let videoDownload2 = document.querySelector('#videoDownload2');
        videoDownload1.setAttribute('href', videoUrl + video1 + '.mp4');
        videoDownload2.setAttribute('href', videoUrl + video2 + '.mp4');

    }

    function downloaImage() {
        let imageDownload = document.querySelector('#imageDownload');
        imageDownload.setAttribute('href', imageUrl + image + '.jpg');
    }

    function init() {
        get_query();
        getImage();
        getVideo();
        downloadVideo();
        downloaImage();
    }

    init();
})();