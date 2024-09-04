document.addEventListener('DOMContentLoaded', () => {
    const midiPlayer = document.getElementById('midi-player');
    
      midiPlayer.addEventListener('load', () => {
        console.log('MIDI player is ready'); 
        if (!midiPlayer.playing) {
            midiPlayer.playing = true;
            midiPlayer.start();
        }
      });
      
    //   // Handle any errors
    //   midiPlayer.addEventListener('error', function(error) {
    //     console.error('Error loading MIDI:', error);
    //   });
  });