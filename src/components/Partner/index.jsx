import partnerImg from "/src/assets/mongoose.png"

export default function Partner() {

  return (
    <div className="partner">
      <h2>Visit Our Partner Website</h2>
      <figure>
        <a href="https://mongoose-music-store.vercel.app/">
          <img src={partnerImg} alt="Partner" style={{ width: '30%' }} />
        </a>
          <figcaption>Mongoose Music</figcaption>
      </figure>
    </div>
  );
}