import React from "react";

const thestand = "thestand.mp3";
const onlyu = "onlyu.mp3";
const bored = "bored.mp3";
const intotheblack = "intotheblack.mp3";
const coolblue = "coolblue.mp3";
const thenightwemet = "thenightwemet.mp3";


function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}

const TRACKS = [

  { id: 1, title: "The Stand" },
  { id: 2, title: "Only You" },
  { id: 3, title: "Bored" },
  { id: 4, title: "Into the Black" },
  { id: 5, title: "Cool blue" },
  { id: 6, title: "The Night We Met" },


];

class App extends React.Component {
  state = {
    selectedTrack: null,
    player: "stopped",
    currentTime: null,
    duration: null
  };

  componentDidMount() {
    this.player.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.player.removeEventListener("timeupdate", () => { });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch (this.state.selectedTrack) {

        case "The Stand":
          track = thestand;
          break;
        case "Only You":
          track = onlyu;
          break;
        case "Bored":
          track = bored;
          break;
        case "Into the Black":
          track = intotheblack;
          break;
        case "Cool Blue":
          track = coolblue;
          break;
        case "The Night We Met":
          track = thenightwemet;
          break;



        default:
          break;
      }
      if (track) {
        this.player.src = track;
        this.player.play();
        this.setState({ player: "playing", duration: this.player.duration });
      }
    }
    if (this.state.player !== prevState.player) {
      if (this.state.player === "paused") {
        this.player.pause();
      } else if (this.state.player === "stopped") {
        this.player.pause();
        this.player.currentTime = 0;
        this.setState({ selectedTrack: null });
      } else if (
        this.state.player === "playing" &&
        prevState.player === "paused"
      ) {
        this.player.play();
      }
    }
    if (
      this.state.duration &&
      !isNaN(this.state.duration) &&
      this.state.duration === this.state.currentTime
    ) {
      const currentTrackIndex =
        TRACKS.findIndex(
          track => track.title === this.state.selectedTrack
        );
      const tracksAmount = TRACKS.length - 1;
      if (currentTrackIndex === tracksAmount) {
        this.setState({
          selectedTrack: null,
          player: "stopped",
          currentTime: null,
          duration: null
        });
      } else {
        this.handleSkip("next");
      }
    }
  }

  handleSkip = direction => {
    const currentTrackIndex = TRACKS.findIndex(
      track => track.title === this.state.selectedTrack
    );
    const tracksAmount = TRACKS.length - 1;
    if (direction === "previous") {
      const previousTrack =
        currentTrackIndex === 0 ? tracksAmount : currentTrackIndex - 1;
      const trackToPlay = TRACKS[previousTrack];
      this.setState({ selectedTrack: trackToPlay.title });
    } else if (direction === "next") {
      const nextTrack =
        currentTrackIndex === tracksAmount ? 0 : currentTrackIndex + 1;
      const trackToPlay = TRACKS[nextTrack];
      this.setState({ selectedTrack: trackToPlay.title, duration: null });
    }
  };

  setTime = time => {
    this.player.currentTime = time;


  };

  render() {
    const list = TRACKS.map(item => {
      return (
        <li
          key={item.id}
          onClick={() => this.setState({ selectedTrack: item.title })}
          style={{
            fontWeight: item.title === this.state.selectedTrack && "bold"
          }}
        >
          {item.title}
        </li>
      );
    });



    return (
      <>

        <div className="playerr">
          <ul className="tracklistr">{list}</ul>
          <TimeBar
            setTime={this.setTime}
            currentTime={this.state.currentTime}
            duration={this.state.duration}
          />
          {this.state.player !== "stopped" && (
            <div className="buttonsr">
              <button onClick={() => this.handleSkip("previous")}>
                Previous
              </button>
              {this.state.player === "paused" && (
                <button onClick={() => this.setState({ player: "playing" })}>
                  Play
                </button>
              )}
              {this.state.player === "playing" && (
                <button onClick={() => this.setState({ player: "paused" })}>
                  Pause
                </button>
              )}
              <button onClick={() => this.setState({ player: "stopped" })}>
                Stop
              </button>
              <button onClick={() => this.handleSkip("next")}>Skip</button>
            </div>
          )}
        </div>
        <audio ref={ref => (this.player = ref)} />
      </>
    );
  }
}

function TimeBar({ currentTime, duration, setTime }) {
  const formattedCurrentTime = getTime(currentTime);
  const formattedDuration = getTime(duration);
  const sBits = [];
  let count = 0;
  while (count < duration) {
    sBits.push(count);
    count++;
  }
  const seconds = sBits.map(second => {
    return (
      <div
        key={second}
        onClick={() => setTime(second)}
        style={{
          float: "left",
          cursor: "pointer",
          height: "30px",
          width: `${300 / Math.round(duration)}px`,
          background:
            currentTime && Math.round(currentTime) === second
              ? "white"
              : "black",
          transition: "all 0.5s ease-in-out"
        }}
      />
    );
  });
  return (


    <div className="timebar">

      <div className="bar">
        {seconds}
      </div>
      {currentTime ? (
        <div className="time">

          {formattedCurrentTime} / {formattedDuration}
        </div>

      ) : (
          ""
        )}

    </div>

  );
}

export default App;
