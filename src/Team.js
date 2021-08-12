import styles from "./Team.module.scss";

const Team = () => {
  const crews = [
    { id:'1',job: "Product owner", pic: "photo1", name: "Bill Mahoney" },
    { id:'2',job: "Art director", pic: "photo2", name: "Saba Cabrera" },
    { id:'3',job: "Tech Lead", pic: "photo3", name: "Shae Le" },
    { id:'4',job: "UX Designer", pic: "photo4", name: "Skylah Lu" },
    { id:'5',job: "Developer", pic: "photo5", name: "Griff Richards" },
    { id:'6',job: "Developer", pic: "photo6", name: "Stan John" },
  ];

  return (
    <div>
    <main className={styles.main}>
      <div className={styles.overview}>
        <div className={styles.overviewTitle}>The creative crew</div>

        <div className={styles.intro}>
          <div className={styles.introTitle}>WHO WE ARE</div>
          <p className={styles.introDesc}>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>
      <div className={styles.crew}>
        {crews.map((crew) => (
          <div className={styles.crewCard} key={crew.id} >
            <p className={styles.jobTitle} >{crew.job}</p>
            <img src={crew.pic + ".png"} alt="p1" />
            <div className={styles.jobName}>{crew.name}</div>
          </div>
        ))}
      </div>
      </main>
      
      <footer className={styles.footer}>
    created by <b className={styles.username}>shinghuey27</b> - devChallenges.io
    </footer>
      </div>
   
 
  );
};

export default Team;
