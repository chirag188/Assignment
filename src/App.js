import React, { useState } from "react";
import { Player } from "video-react";
import { useSelector } from "react-redux";
import "./App.css";
import Nav from "./views/Nav/Nav";

function App() {
  const [searchtext, setSearch] = useState();

  const callBack = (value) => {
    setSearch(value);
  };
  const { assignmentVideos, errorMsg, loading, search } = useSelector(
    (state) => state.searchReducer
  );
  console.log(search, searchtext);
  return (
    <>
      <Nav callBack={callBack} />
      {loading && search !== searchtext ? (
        <div style={{ textAlign: "center" }}>Loading Data ...</div>
      ) : (
        <div className="assignmentvideo">
          {assignmentVideos.map((item) => {
            return (
              <div
                key={item.heading}
                className="card item col-lg-4 col-md-6 col-xs-12"
              >
                <Player playsInline src={item.video} />
                <div className="card-body" style={{ marginBottom: 15 }}>
                  <h5 className="card-title">Video title</h5>
                  <div className="assignmentvideo">
                    {item.tags.map((tag, index) => {
                      return (
                        <div key={item.heading + index} className="tag">
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
