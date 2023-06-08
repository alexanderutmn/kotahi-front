import React from 'react';

const RightsAndPermissionsDescriptionRus: React.FC = () => {
  return (
    <>
      <div className="sj-introduction sj-sectioninnerspace">
        <span style={{ marginBottom: '3rem', fontSize: '32px' }}>Права и разрешения</span>
        <div className="sj-description">
          <p>
            Согласно рекомендациям президиума <strong>ВАК (Высшая Аттестационная Комиссия)</strong> распоряжением
            Минобрнауки России от 15 февраля 2022 г. № 59-р издание &laquo;Вестник ГГНТУ. Технические науки&raquo;
            включено в Перечень по 13 научным специальностям и соответствующим им отраслям науки, по которым
            присуждаются ученые степени.
          </p>
          <p>
            Журнал &laquo;Вестник ГГНТУ. Технические науки&raquo; имеет международный номер ISSN &ndash;{' '}
            <a href="https://portal.issn.org/resource/issn/2686-7567" target="_blank" rel="noreferrer">
              2686-7567
            </a>
          </p>
          <p>
            Федеральные экземпляры изданий рассылаются через Российскую книжную палату в Российскую государственную
            библиотеку и другие центральные библиотеки, в научные и информационные организации России согласно перечню,
            утверждённому постановлением Правительства Российской Федерации.
          </p>
          <p>
            Журнал зарегистрирован в средствах массовой информации Федеральной службой по надзору в сфере связи и
            массовых коммуникаций. Получено свидетельство о регистрации СМИ:{' '}
            <a
              href="https://rkn.gov.ru/mass-communications/reestr/media/?id=736311&amp;utm_source=elibrary.ru&amp;utm_medium=referral&amp;utm_campaign=elibrary.ru&amp;utm_referrer=elibrary.ru"
              target="_blank"
              rel="noreferrer"
            >
              ПИ № ТУ 20 - 00118 от 21.05.2019
            </a>
          </p>
          <p>
            Заключён договор с Российской электронной научной библиотекой на размещение полнотекстовой версии журнала в
            открытом доступе.
          </p>
        </div>
      </div>
    </>
  );
};

export default RightsAndPermissionsDescriptionRus;
