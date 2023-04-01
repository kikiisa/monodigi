let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if( theme == 'dark' ){
    document.documentElement.classList.add('dark')
}

document.getElementById('dark-mode-toggle').addEventListener('click', function(){
   document.documentElement.classList.toggle('dark')
});



document.getElementById('song-saved').addEventListener('click', function(){
	document.getElementById('song-saved').classList.toggle('saved');
});


Amplitude.init({
    "bindings": {
        37: 'prev',
        39: 'next',
        32: 'play_pause'
    },
    "callbacks": {
        timeupdate: function(){
            let percentage = Amplitude.getSongPlayedPercentage();

            if( isNaN( percentage ) ){
                percentage = 0;
            }

            /**
             * Massive Help from: https://nikitahl.com/style-range-input-css
             */
            let slider = document.getElementById('song-percentage-played');
            slider.style.backgroundSize = percentage + '% 100%';
        }
    },
    "songs": [
		{
			"name": "Monodigi",
			"artist": "Ridha Alvariza Anwar",
			"album": "Politik Itu Bermuka Dua",
			"url": "https://e568-140-213-122-178.ap.ngrok.io/stream.ogg",
			"cover_art_url": "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg"
		},
    ]
});

window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};