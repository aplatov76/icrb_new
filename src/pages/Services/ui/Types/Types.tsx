const Types = () => {
  return (
    <>
      <div className="page-heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>Виды и профили оказываемой медицинской помощи</h1>
            </div>
          </div>
        </div>
      </div>
      <section id="list-profile-med-helps">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <span>
                    <strong>Доврачебная медицинская помощь</strong>
                  </span>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">20</span>
            </div>

            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
              <ul className="list-group">
                <li className="list-group-item">Акушерское дело</li>
                <li className="list-group-item">Анестезиология и реаниматология</li>
                <li className="list-group-item">Диетология</li>
                <li className="list-group-item">Лабораторная диагностика</li>
                <li className="list-group-item">Лечебное дело</li>
                <li className="list-group-item">Медицинские осмотры (предрейсовые, послерейсовые)</li>
                <li className="list-group-item">Медицинская статистика</li>
                <li className="list-group-item">Медицинский массаж</li>
                <li className="list-group-item">Общая практика</li>
                <li className="list-group-item">Операционное дело</li>
                <li className="list-group-item">Организация сестринского дела</li>
                <li className="list-group-item">Паразитология</li>
                <li className="list-group-item">Рентгенология</li>
                <li className="list-group-item">Сестринское дело</li>
                <li className="list-group-item">Сестринское дело в педиатрии</li>
                <li className="list-group-item">Стоматология</li>
                <li className="list-group-item">Стоматология ортопедическая</li>
                <li className="list-group-item">Физиотерапия</li>
                <li className="list-group-item">Функциональная диагностика</li>
                <li className="list-group-item">Экспертиза временной нетрудоспособности</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>Амбулаторно - поликлиническая медицинская помощь</strong>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">46</span>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Первичная медико - санитарная помощь</strong>
                </li>
                <li className="list-group-item">Анестезиология и реаниматология</li>
                <li className="list-group-item">Инфекционные болезни</li>
                <li className="list-group-item">Контроль качества медицинской помощи</li>
                <li className="list-group-item">Клиническая лабораторная диагностика</li>
                <li className="list-group-item">Лечебная физкультура и спортивная медицина</li>
                <li className="list-group-item">Неврология</li>
                <li className="list-group-item">Общая врачебная практика (семейная медицина)</li>
                <li className="list-group-item">Общественное здоровье и организация здравоохранения</li>
                <li className="list-group-item">Оториноларингология</li>
                <li className="list-group-item">Педиатрия</li>
                <li className="list-group-item">Рентгенология</li>
                <li className="list-group-item">Стоматология</li>
                <li className="list-group-item">Терапия</li>
                <li className="list-group-item">Урология</li>
                <li className="list-group-item">Функциональная диагностика</li>
                <li className="list-group-item">Хирургия</li>
                <li className="list-group-item">Ультразвуковая диагностика</li>
                <li className="list-group-item">Функциональная диагностика</li>
                <li className="list-group-item">Экспертиза временной нетрудоспособности</li>
                <li className="list-group-item">Эндокринология</li>
                <li className="list-group-item">Эндоскопия</li>
                <li className="list-group-item">
                  <strong>
                    Осуществление медицинской помощи женщинам в период беременности, во время и после родов
                  </strong>
                </li>
                <li className="list-group-item">Акушерство и гинекология</li>
                <li className="list-group-item">
                  <strong>Специализированная медицинская помощь</strong>
                </li>
                <li className="list-group-item">Анестезиология и реаниматология</li>
                <li className="list-group-item">Дерматовенерология</li>
                <li className="list-group-item">Контроль качества медицинской помощи</li>
                <li className="list-group-item">Клиническая лабораторная диагностика</li>
                <li className="list-group-item">Лечебная физкультура и спортивная медицина</li>
                <li className="list-group-item">Общественное здоровье и организация здравоохранения</li>
                <li className="list-group-item">Оториноларингология</li>
                <li className="list-group-item">Офтальмология</li>
                <li className="list-group-item">Педиатрия</li>
                <li className="list-group-item">Профпатология</li>
                <li className="list-group-item">Психиатрия</li>
                <li className="list-group-item">Психиатрия и наркология</li>
                <li className="list-group-item">Ренгенология</li>
                <li className="list-group-item">Стоматология</li>
                <li className="list-group-item">Стоматология ортопедическая</li>
                <li className="list-group-item">Ультразвуковая диагностика</li>
                <li className="list-group-item">Урология</li>
                <li className="list-group-item">Фтизиатрия</li>
                <li className="list-group-item">Функциональная диагностика</li>
                <li className="list-group-item">Хирургия</li>
                <li className="list-group-item">Экспертиза временной нетрудоспособности</li>
                <li className="list-group-item">Эндокринология</li>
                <li className="list-group-item">Эндоскопия</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>Стационарная медицинская помощь</strong>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">30</span>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Первичная медико - санитарная помощь</strong>
                </li>
                <li className="list-group-item">Анестезиология и реаниматология</li>
                <li className="list-group-item">Контроль качества медицинской помощи</li>
                <li className="list-group-item">Клиническая лабораторная диагностика</li>
                <li className="list-group-item">Лечебная физкультура и спортивная медицина</li>
                <li className="list-group-item">Общественное здоровье и организация здравоохранения</li>
                <li className="list-group-item">Оториноларингология</li>
                <li className="list-group-item">Педиатрия</li>
                <li className="list-group-item">Рентгенология</li>
                <li className="list-group-item">Терапия</li>
                <li className="list-group-item">Функциональная диагностика</li>
                <li className="list-group-item">Хирургия</li>
                <li className="list-group-item">Ультразвуковая диагностика</li>
                <li className="list-group-item">Экспертиза временной нетрудоспособности</li>
                <li className="list-group-item">Эндоскопия</li>
                <li className="list-group-item">
                  <strong>
                    Осуществление медицинской помощи женщинам в период беременности, во время и после родов
                  </strong>
                </li>
                <li className="list-group-item">Акушерство и гинекология</li>
                <li className="list-group-item">Экспертиза временной нетрудоспособности</li>
                <li className="list-group-item">
                  <strong>Специализированная медицинская помощь:</strong>
                </li>
                <li className="list-group-item">Акушерство и гинекология</li>
                <li className="list-group-item">Анестезиология и реаниматология</li>
                <li className="list-group-item">Контроль качества медицинской помощи</li>
                <li className="list-group-item">Лечебная физкультура и спортивная медицина</li>
                <li className="list-group-item">Медицинское (наркологическое) освидетельствование</li>
                <li className="list-group-item">Общественное здоровье и организация здравоохранения</li>
                <li className="list-group-item">Педиатрия</li>
                <li className="list-group-item">Ренгенология</li>
                <li className="list-group-item">Терапия</li>
                <li className="list-group-item">Трансфузиология</li>
                <li className="list-group-item">Ультразвуковая диагностика</li>
                <li className="list-group-item">Хирургия</li>
                <li className="list-group-item">Экспертиза временной нетрудоспособности</li>
                <li className="list-group-item">Эндоскопия</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingFive">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <strong>Первичная специализрованная медико - санитарная помощь</strong>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">27</span>
            </div>
            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Первичная доврачебная медико - санитарная помощь в амбулаторных условиях</strong>
                </li>
                <li className="list-group-item">Вакцинация (проведение профилактических прививок)</li>
                <li className="list-group-item">Неотложная медицинская помощь</li>
                <li className="list-group-item">
                  <strong>Первичная врачебная медико - санитарная помощь в амбулаторных условиях</strong>
                </li>
                <li className="list-group-item">Неотложная медицинская помощь</li>
                <li className="list-group-item">
                  <strong>Первичная врачебная медико - санитарная помощь в условиях стационара</strong>
                </li>
                <li className="list-group-item">Неотложная медицинская помощь</li>
                <li className="list-group-item">Общая врачебная практика (семейная медицина)</li>
                <li className="list-group-item">Организация здравоохранения и общественного здоровья</li>
                <li className="list-group-item">Педиатрия</li>
                <li className="list-group-item">Терапия</li>
                <li className="list-group-item">
                  <strong>Первичная специализированная медико - санитарная помощь в амбулаторных условиях</strong>
                </li>
                <li className="list-group-item">
                  Акушерство и гинекология (за исключением использования вспомогательных репродуктивных технологий)
                </li>
                <li className="list-group-item">Гастроэнтерология</li>
                <li className="list-group-item">Оториноларингология (за исключением кохлеарной имплантации)</li>
                <li className="list-group-item">Стоматология общей практики</li>
                <li className="list-group-item">Детская урология - андрология</li>
                <li className="list-group-item">Детская хирургия</li>
                <li className="list-group-item">Детская эндокринология</li>
                <li className="list-group-item">Кардиология</li>
                <li className="list-group-item">Пульмонология</li>
                <li className="list-group-item">Стоматология детская</li>
                <li className="list-group-item">Травматология и ортопедия</li>
                <li className="list-group-item">Физиотерапия</li>
                <li className="list-group-item">
                  <strong>
                    Первичная специализированная медико - санитарная помощь в условиях дневного стационара
                  </strong>
                </li>
                <li className="list-group-item">
                  Акушерство и гинекология (за исключением использования вспомогательных репродуктивных технологий)
                </li>
                <li className="list-group-item">Гастроэнтерология</li>
                <li className="list-group-item">Неврология</li>
                <li className="list-group-item">Организация здравоохранения и общественного здоровья</li>
                <li className="list-group-item">Хирургия</li>
                <li className="list-group-item">Дерматовенерология</li>
                <li className="list-group-item">Физиотерапия</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingSix">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  <strong>Специализированная помощь</strong>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">3</span>
            </div>
            <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
              <li className="list-group-item">
                <strong>В стационарных условиях</strong>
              </li>
              <li className="list-group-item">
                Акушерство и гинекология (за исключением использования вспомогательных репродуктивных технологий)
              </li>
              <li className="list-group-item">Дерматовенерология</li>
              <li className="list-group-item">Физиотерапия</li>
            </div>
          </div>

          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingSeven">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  <strong>Скорая, в т.ч. скорая специализированная медицинская помощь</strong>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">1</span>
            </div>
            <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
              <li className="list-group-item">
                <strong>Скорая медицинская помощь вне медицинских организациях</strong>
              </li>
              <li className="list-group-item">Скорая медицинская помощь</li>
            </div>
          </div>

          <div className="card">
            <div className="card-header icrb-number-in-list" id="headingEight">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  <strong>Мед. осмотры, мед. освидетельствования и мед. экспертизы</strong>
                </button>
              </h2>
              <span className="badge-primary badge-pill icrb-number">8</span>
            </div>
            <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
              <li className="list-group-item">
                <strong>При проведении медицинских осмотров</strong>
              </li>
              <li className="list-group-item">Медицинские профилактические осмотры</li>
              <li className="list-group-item">Медицинское освидетельствование на выявление ВИЧ - инфекции</li>
              <li className="list-group-item">
                Медицинское освидетельствование на наличие инфекционных заболеваний, представляющих опасность для
                окружающих и являющихся основанием для отказа иностранным гражданам и лицам без гражданства в выдаче
                либо аннулировании разрешения на временное проживание, или вида на жительство. или разрешения на работу
                в РФ
              </li>
              <li className="list-group-item">Медицинские осмотры (предрейсовые, послерейсовые)</li>
              <li className="list-group-item">
                <strong>При проведении медицинских освидетельствований</strong>
              </li>
              <li className="list-group-item">
                Медицинское освидетельствование кандидатов в усыновители, опекуны (попечители) или приемные родители
              </li>
              <li className="list-group-item">
                Медицинское освидетельствование на состояние опьянения (алкогольного, наркотического или иного
                токсического)
              </li>
              <li className="list-group-item">
                Медицинское освидетельствование на наличие медицинских противопоказаний к управлению транспортным
                средством
              </li>
              <li className="list-group-item">
                Медицинское освидетельствование на наличие медицинских противопоказаний к владению оружием
              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Types
