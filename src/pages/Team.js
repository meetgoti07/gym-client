import React, { useEffect, useState } from "react";
import PageTitle from "../elements/PageTitle";
import axios from "axios";

const Team = () => {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getAllTrainers`);
        setTrainers(response.data.trainers);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, []);

  const openModal = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const closeModal = () => {
    setSelectedTrainer(null);
  };

  return (
      <>
        <div className="page-content bg-white">
          <PageTitle parentTitle="Pages" activePage="Our Team" />
          <section className="content-inner">
            <div className="container">
              <div className="row">
                {trainers.map((trainer, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 m-b30" key={index}>
                      <div className="dz-team style-1" onClick={() => openModal(trainer)}>
                        <div className="dz-media">
                          <img
                              className="img-fluid"
                              src={`${process.env.REACT_APP_BACKEND_URL}/${trainer.image}`}
                              alt={trainer.name}
                              width={"300px"}
                              height={"300px"}
                          />
                        </div>
                        <div className="dz-content text-center">
                          <span className="dz-name">{trainer.name}</span>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {selectedTrainer && (
              <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                <div className="modal-dialog modal-lg" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{selectedTrainer.name}</h5>
                      <button type="button" className="close" onClick={closeModal}>
                        <span>&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img
                          className="img-fluid"
                          src={`${process.env.REACT_APP_BACKEND_URL}/${selectedTrainer.image}`}
                          width={"300px"}
                          height={"300px"}
                          alt={selectedTrainer.name}
                      />
                      <p><strong>Description:</strong> {selectedTrainer.description}</p>
                      <p><strong>Rating:</strong> {selectedTrainer.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </>
  );
};

export default Team;
