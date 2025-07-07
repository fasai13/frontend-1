
import Image from "next/image"


export default function Cards(){
    return (
        <div className="container my-4">
      <h3 className="mb-4 text-center">Our Cards</h3>
      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="/images/card1.jpg"
              className="card-img-top"
              alt="Card 1"
            />
            <div className="card-body">
              <p className="card-text">Text for card 1</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="/images/card2.jpg"
              className="card-img-top"
              alt="Card 2"
            />
            <div className="card-body">
              <p className="card-text">Text for card 2</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img
              src="/images/card3.jpg"
              className="card-img-top"
              alt="Card 3"
            />
            <div className="card-body">
              <p className="card-text">Text for card 3</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
};