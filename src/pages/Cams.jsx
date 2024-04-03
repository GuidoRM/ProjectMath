import DefaultSection from "../components/DefaultSection";
import camsData from "./../data/camsData.json";

const Cams = () => {
  const cams = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>

      <DefaultSection title={"CAMARAS"} className={"cams"}>

        <input type="text" placeholder="Buscar camaras por IP" />

        <section className="cams__section">
          {
            camsData.map(({ip, videoPath, sectionName, isActive, name}) => (
              <article key={ip} className={`cams__section-space ${!isActive?"nosignal":""}`}>
                
                <video width={"100%"} autoPlay={true} muted loop>
                  <source src={videoPath} />
                </video>

                <section className="cams__section-space-description">
                  <p>{name} - {sectionName}</p>
                  <a>IP {ip}</a>
                </section>
              
              </article>
            ))
          }
        </section>

      </DefaultSection>

    </>
  )
}

export default Cams