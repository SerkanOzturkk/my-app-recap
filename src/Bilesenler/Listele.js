import React from "react";

const Listele = () => {
  const geciciVeri = [
    {
      id: 1,
      ad: "Serkan",
      soyad: "ÖZTÜRK",
      mail: "serkan@gazi.edu.tr",
    },
    {
      id: 2,
      ad: "Alper",
      soyad: "DOĞRU",
      mail: "alper@gazi.edu.tr",
    },
    {
      id: 3,
      ad: "Ayhan",
      soyad: "ERDEM",
      mail: "ayhan@gazi.edu.tr",
    },
  ];
  return (
    <div className="container">
      <h1>Hoca Listesi</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th> Id</th>
            <th> Ad</th>
            <th> Soyad</th>
            <th> Mail</th>
          </tr>
        </thead>
        <tbody>
          {geciciVeri.map((deger) => (
            <tr key={deger.id}>
              <td>{deger.id}</td>
              <td>{deger.ad}</td>
              <td>{deger.soyad}</td>
              <td>{deger.mail}</td>
            </tr>
          ))}

          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Listele;
