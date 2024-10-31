let imgPlaced = false;

function imgPlacer(imgsrc) {
  const img = document.getElementById('demo2');
  img.src = imgsrc;
  let src = document.getElementById('demo2');
}

function fightSong(songsrc) {
  const audio = document.getElementById('demo3');
  audio.src = songsrc;
  let src = document.getElementById('demo3');
}

function teamSelection() {
  let formIsValid = true;
  
  const yourTeam = document.getElementById('teamname');
  const displayTeam = yourTeam.selectedIndex;
  
  if (displayTeam === 0) {
    formIsValid = false;
    document.getElementById("demo").innerHTML = "Select an SEC team above!";
    document.getElementById("demo").className = "demo";
    document.getElementById("teamstats").className = "teamstats";
    imgPlacer('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Southeastern_Conference_logo.svg/154px-Southeastern_Conference_logo.svg.png');
    fightSong('');
  }

  if (displayTeam === 1) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[1].text;
    document.getElementById("demo").className = "demoAlabama";
    document.getElementById("teamstats").className = "teamstatsAlabama";
    imgPlacer('https://content.sportslogos.net/logos/30/597/full/alabama_crimson_tide_logo_primary_19528240.png');
    fightSong('../vid/alabama.mp4');
  }

  if (displayTeam === 2) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[2].text;
    document.getElementById("demo").className = "demoArkansas";
    document.getElementById("teamstats").className = "teamstatsArkansas";
    imgPlacer('https://content.sportslogos.net/logos/30/606/full/arkansas_razorbacks_logo_alternate_20017823.png');
    fightSong('../vid/arkansas.mp4');
  }

  if (displayTeam === 3) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[3].text;
    document.getElementById("demo").className = "demoAuburn";
    document.getElementById("teamstats").className = "teamstatsAuburn";
    imgPlacer('https://content.sportslogos.net/logos/30/610/full/auburn_tigers_logo_alternate_19457661.png');
    fightSong('../vid/auburn.mp4');
  }

  if (displayTeam === 4) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[4].text;
    document.getElementById("demo").className = "demoFlorida";
    document.getElementById("teamstats").className = "teamstatsFlorida";
    imgPlacer('https://content.sportslogos.net/logos/31/675/full/7076_florida_gators-primary-2013.png');
    fightSong('../vid/florida.mp4');
  }

  if (displayTeam === 5) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[5].text;
    document.getElementById("demo").className = "demoGeorgia";
    document.getElementById("teamstats").className = "teamstatsGeorgia";
    imgPlacer('https://content.sportslogos.net/logos/31/687/full/georgia_bulldogs_logo_primary_1945_sportslogosnet-8282.png');
    fightSong('../vid/georgia.mp4');
  }

  if (displayTeam === 6) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[6].text;
    document.getElementById("demo").className = "demoKentucky";
    document.getElementById("teamstats").className = "teamstatsKentucky";
    imgPlacer('https://content.sportslogos.net/logos/32/721/full/kentucky_wildcats_logo_primary_1973_sportslogosnet-6300.png');
    fightSong('../vid/kentucky.mp4');
  }

  if (displayTeam === 7) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[7].text;
    document.getElementById("demo").className = "demoLSU";
    document.getElementById("teamstats").className = "teamstatsLSU";
    imgPlacer('https://content.sportslogos.net/logos/32/723/full/lsu_tigers_logo_secondary_20144821.png');
    fightSong('../vid/lsu.mp4');
  }

  if (displayTeam === 8) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[8].text;
    document.getElementById("demo").className = "demoMSState";
    document.getElementById("teamstats").className = "teamstatsMSState";
    imgPlacer('https://content.sportslogos.net/logos/32/755/full/mississippi_state_bulldogs_logo_primary_19957845.png');
    fightSong('../vid/msstate.mp4');
  }

  if (displayTeam === 9) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[9].text;
    document.getElementById("demo").className = "demoMissouri";
    document.getElementById("teamstats").className = "teamstatsMissouri";
    imgPlacer('https://content.sportslogos.net/logos/32/757/full/missouri_tigers_logo_primary_1980_sportslogosnet-4904.png');
    fightSong('../vid/missouri.mp4');
  }

  if (displayTeam === 10) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[10].text;
    document.getElementById("demo").className = "demoOklahoma";
    document.getElementById("teamstats").className = "teamstatsOklahoma";
    imgPlacer('https://content.sportslogos.net/logos/33/793/full/oklahoma_sooners_logo_primary_19796492.png');
    fightSong('../vid/oklahoma.mp4');
  }

  if (displayTeam === 11) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[11].text;
    document.getElementById("demo").className = "demoOleMiss";
    document.getElementById("teamstats").className = "teamstatsOleMiss";
    imgPlacer('https://content.sportslogos.net/logos/32/754/full/mississippi_rebels_logo_secondary_1983_sportslogosnet-6655.png');
    fightSong('../vid/olemiss.mp4');
  }

  if (displayTeam === 12) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[12].text;
    document.getElementById("demo").className = "demoSouthCarolina";
    document.getElementById("teamstats").className = "teamstatsSouthCarolina";
    imgPlacer('https://content.sportslogos.net/logos/34/834/full/south_carolina_gamecocks_logo_alternate_1961_sportslogosnet-1827.png');
    fightSong('../vid/southcarolina.mp4');
  }

  if (displayTeam === 13) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[13].text;
    document.getElementById("demo").className = "demoTennessee";
    document.getElementById("teamstats").className = "teamstatsTennessee";
    imgPlacer('https://content.sportslogos.net/logos/34/861/full/cohfva58evf2ppgy7fxk.gif');
    fightSong('../vid/tennessee.mp4');
  }

  if (displayTeam === 14) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[14].text;
    document.getElementById("demo").className = "demoTexas";
    document.getElementById("teamstats").className = "teamstatsTexas";
    imgPlacer('https://content.sportslogos.net/logos/34/865/full/texas_longhorns_logo_secondary_19666597.png');
    fightSong('../vid/texas.mp4');
  }

  if (displayTeam === 15) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[15].text;
    document.getElementById("demo").className = "demoTexasAM";
    document.getElementById("teamstats").className = "teamstatsTexasAM";
    imgPlacer('https://content.sportslogos.net/logos/34/866/full/texas_a&m_aggies_logo_primary_20216040.png');
    fightSong('../vid/texasam.mp4');
  }

  if (displayTeam === 16) {
    document.getElementById("demo").innerHTML = document.getElementById('teamname').options[16].text;
    document.getElementById("demo").className = "demoVanderbilt";
    document.getElementById("teamstats").className = "teamstatsVanderbilt";
    imgPlacer('https://content.sportslogos.net/logos/35/895/full/vanderbilt_commodores_logo_secondary_1999_sportslogosnet-8828.png');
    fightSong('../vid/vanderbilt.mp4');
  }

}