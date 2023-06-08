import React from 'react';

const ContactUsDescriptionRu: React.FC = () => {
  return (
    <>
      <div className="sj-introduction sj-sectioninnerspace">
        <span style={{ marginBottom: '3rem', fontSize: '32px' }}>Контакты</span>
        <div className="sj-description">
          <h3>Редакция журнала «Вестник ГГНТУ. Гуманитарные и социально-экономические науки»</h3>
          <p>Зав. редакцией: Таймасханова Залина Руслановна</p>
          <p>АДРЕС: 364024, г. Грозный, пр. Х.А. Исаева, 100</p>
          <p>Тел./факс: (8712) 29-59-32</p>
          <p>
            e-mail: <a href="mailto:trudy-ggntu@mail.ru">trudy-ggntu@mail.ru</a>
          </p>

          <p>
            Ответственные секретари:
            <br />
            Саламанова Мадина Шахидовна
            <br />
            Хаджиева Лаура Куйраевна
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUsDescriptionRu;
