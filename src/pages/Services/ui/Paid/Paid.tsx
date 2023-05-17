const Paid = () => {
  return (
    <section>
      <div className="page-heading">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1>Перечень платных медицинских услуг с указанием их стоимости</h1>
            </div>
            <div className="col-md-12 accordion" id="accordionExample">
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
                        <strong>Ортопедическая стоматология</strong>
                      </span>
                    </button>
                  </h2>
                  <span className="badge-primary badge-pill icrb-number">
                    <a className="a-color-transparent" href="/files/documents/prais/ОртопедическаяСтоматология.xlsx">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">№</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td>
                          <strong>Общие работы:</strong>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Консультация</td>
                        <td>
                          <span>340 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Снятие альгинатных оттисков</td>
                        <td>
                          <span>245 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Снятие силиконовых оттисков</td>
                        <td>
                          <span>450 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Отливка гипсовой модели</td>
                        <td>
                          <span>90 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>Мостовидные протезы, в них опорные элементы:</strong>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Коронка штампованная металическая</td>
                        <td>
                          <span>955 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Коронка комбинированная (с облицовской из пластмассы)</td>
                        <td>
                          <span>1625 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Штифтовой зуб</td>
                        <td>
                          <span>1665 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Зуб литой</td>
                        <td>
                          <span>735 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Зуб литой с облицовкой</td>
                        <td>
                          <span>1580 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Спайка коронок</td>
                        <td>
                          <span>230 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Коронка пластмассовая</td>
                        <td>
                          <span>1455 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Зуб пластмассовый</td>
                        <td>
                          <span>880 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Восстановительная коронка</td>
                        <td>
                          <span>1155 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Вкладка</td>
                        <td>
                          <span>1560 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Подготовка канала под штиф</td>
                        <td>
                          <span>745 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Оклюзионная накладка</td>
                        <td>
                          <span>240 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Коронка временная</td>
                        <td>
                          <span>475 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>Полные съемные протезы:</strong>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Частичный съемный протез (пластмассовый) с 1 зубом</td>
                        <td>
                          <span>3460 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Частичный съемный протез (пластмассовый) с 2 зубами</td>
                        <td>
                          <span>3615 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Частичный съемный протез (пластмассовый) с 3 зубами</td>
                        <td>
                          <span>3775 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Частичный съемный протез (пластмассовый) с 4 зубами</td>
                        <td>
                          <span>3930 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Частичный съемный протез (пластмассовый) с 5 зубами</td>
                        <td>
                          <span>4085 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Частичный съемный протез (пластмассовый) с 6 зубами</td>
                        <td>
                          <span>4245 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Частичный съемный протез (пластмассовый) с 7 зубами</td>
                        <td>
                          <span>4400 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Частичный съемный протез (пластмассовый) с 8 зубами</td>
                        <td>
                          <span>4560 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Частичный съемный протез (пластмассовый) с 9 зубами</td>
                        <td>
                          <span>4715 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Частичный съемный протез (пластмассовый) с 10 зубами</td>
                        <td>
                          <span>4875 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Частичный съемный протез (пластмассовый) с 11 зубами</td>
                        <td>
                          <span>5030 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Частичный съемный протез (пластмассовый) с 12 зубами</td>
                        <td>
                          <span>5190 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Частичный съемный протез (пластмассовый) с 13 зубами</td>
                        <td>
                          <span>5345 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Полный протез (пластмассовый) с 14 зубами</td>
                        <td>
                          <span>5500 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>Индивидуальная ложка</td>
                        <td>
                          <span>1440 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>Изоляция торуса</td>
                        <td>
                          <span>90 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Контрольная модель</td>
                        <td>
                          <span>320 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Кламмер гнутый стальной</td>
                        <td>
                          <span>225 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Съемная пластина (накусочная пластина)</td>
                        <td>
                          <span>2000 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Армирование протеза</td>
                        <td>
                          <span>370 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>Ремонт протезов:</strong>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Починка перелома базиса базисной пластмассовой</td>
                        <td>
                          <span>660 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Починка двух переломов базиса базисной пластмассовой</td>
                        <td>
                          <span>760 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Перебазировка съемного протеза</td>
                        <td>
                          <span>1390 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Ремонт фасетки</td>
                        <td>
                          <span>600 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Приварка одного кламмера</td>
                        <td>
                          <span>770 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Приварка одного зуба и одного кламмера</td>
                        <td>
                          <span>900 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Приварка одного зуба</td>
                        <td>
                          <span>775 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Приварка двух зубов</td>
                        <td>
                          <span>790 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Приварка трех зубов</td>
                        <td>
                          <span>820 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Приварка четырех зубов</td>
                        <td>
                          <span>850 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Приварка двух кламмеров</td>
                        <td>
                          <span>855 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>Прочие услуги:</strong>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Снятие коронки</td>
                        <td>
                          <span>180 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Проведение анестезии</td>
                        <td>
                          <span>230 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Фиксация коронки (унифас-2 цинк-фосфатный цемент)</td>
                        <td>
                          <span>225 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Фиксация коронки (фуджи 9 стеклоином цемент)</td>
                        <td>
                          <span>300 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Напыление (1 ед. металлозащитного покрытия)</td>
                        <td>
                          <span>210 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Напыление (1 кламмер)</td>
                        <td>
                          <span>140 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Стоимость литейных работ (1 ед.)</td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                      <strong>Cтоматологические услуги</strong>
                    </button>
                  </h2>
                  <span className="badge-primary badge-pill icrb-number">
                    <a className="a-color-transparent" href="/files/documents/prais/СтоматологическиеУслуги.xlsx">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">№</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Проводниковая анестезия (лидокаин)</td>
                        <td>
                          <span>210&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Проводниковая анестезия (ультракаин)</td>
                        <td>
                          <span>400&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Аппликационная анестезия</td>
                        <td>
                          <span>60&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Инфильтрационная анестезия (лидокаин)</td>
                        <td>
                          <span>120&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Инфильтрационная анестезия (ультракаин)</td>
                        <td>
                          <span>250&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Описание и интерпретация рентгенографических изображений</td>
                        <td>
                          <span>150&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Профилактический прием (осмотр, консультация) врача-стоматолога</td>
                        <td>
                          <span>250&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Наложение временной пломбы</td>
                        <td>
                          <span>275&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Снятие временной пломбы</td>
                        <td>
                          <span>45&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Трепанация зуба, искусственной коронки</td>
                        <td>
                          <span>115&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Пломбирование корневого канала зуба пастой</td>
                        <td>
                          <span>265&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Наложение девитализирующей пасты</td>
                        <td>
                          <span>10&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Пульпотомия (ампутация коронковой пульпы)</td>
                        <td>
                          <span>40&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Экстирпация пульпы</td>
                        <td>
                          <span>125&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>
                          Восстановление зуба пломбой без нарушения контактного пункта, I, V, VI, класс по Блэку с
                          использованием материалов из фотополимеров (витремер, харизма световая, филтек-ультимейт,
                          парафил)
                        </td>
                        <td>
                          <span>990&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>
                          Восстановление зуба пломбой без нарушения контактного пункта, II, III, класс по Блэку с
                          использованием материалов из фотополимеров (витремер, харизма световая, филтек-ультимейт,
                          парафил)
                        </td>
                        <td>
                          <span>1070&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>
                          Восстановление зуба с нарушением контактного пункта, IV класс по Блэку с использованием
                          материалов из фотополимеров (харизма световая, филтек-ультимейт, парафил)
                        </td>
                        <td>
                          <span>1240&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Удаление наддесневых и поддесневых зубных отложений в области зуба ручным методом</td>
                        <td>
                          <span>70&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Избирательное полирование зуба</td>
                        <td>
                          <span>65&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Инструментальная и медикаментозная обработка одного хорошо проходимого корневого канала</td>
                        <td>
                          <span>410&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>Временное пломбирование лекарственным препаратом корнеого канала</td>
                        <td>
                          <span>190&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>Распломбировка корневого канала ранее леченного пастой</td>
                        <td>
                          <span>450&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>
                          Распломбировка корневого канала ранее леченного фосфат-цементом (резорцин-формальдегидным
                          способом)
                        </td>
                        <td>
                          <span>755&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>Удаление временного зуба</td>
                        <td>
                          <span>250&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Удаление постоянного зуба</td>
                        <td>
                          <span>355&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Удаление зуба сложное с разъединением корней</td>
                        <td>
                          <span>600&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Наложение повязки при операции в челюстно-лицевой области</td>
                        <td>
                          <span>280&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>Наложение повязки при операциях в полости рта</td>
                        <td>
                          <span>280&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Операция удаления ретинированного, дистопированного или сверхкомплектного зуба</td>
                        <td>
                          <span>640&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>Хирургическая обработка раны или инфицированной ткани</td>
                        <td>
                          <span>280&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>Вскрытие подслизистого и поднадкостничного очага воспаления в полости рта</td>
                        <td>
                          <span>280&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>31</td>
                        <td>Отсроченный кюретаж лунки удаленного зуба</td>
                        <td>
                          <span>275&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>Лечение перикоронита (промывание, рассечение и/или иссечение капюшона)</td>
                        <td>
                          <span>255&nbsp;руб.</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                      aria-controls="collapseTwo"
                    >
                      <strong>Медицинские и иные услуги</strong>
                    </button>
                  </h2>
                  <span className="badge-primary badge-pill icrb-number">
                    <a className="a-color-transparent" href="/files/documents/prais/МедицинскиеИныеУслуги.xlsx">
                      <i className="fa fa-cloud-download"></i>
                    </a>
                  </span>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample"
                >
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">№</th>
                        <th scope="col">Наименование</th>
                        <th scope="col">Цена</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th></th>
                        <th>
                          <strong>Прием врачей-специалистов:</strong>
                        </th>
                        <th>
                          <span></span>
                        </th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Прием врача-инфекциониста</td>
                        <td>
                          <span>290&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Прием врача-гастроэнтеролога</td>
                        <td>
                          <span>250&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Прием врача-офтальмолога</td>
                        <td>
                          <span>240&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Прием врача-эндокринолога</td>
                        <td>
                          <span>310&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Прием врача-уролога</td>
                        <td>
                          <span>210&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Прием врача-невролога</td>
                        <td>
                          <span>410&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Прием врача-терапевта</td>
                        <td>
                          <span>240&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Прием врача-педиатра</td>
                        <td>
                          <span>380&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Прием врача-хирурга</td>
                        <td>
                          <span>210&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Прием врача-оториноларинголога</td>
                        <td>
                          <span>300&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Прием врача-дерматовенеролога</td>
                        <td>
                          <span>190&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Прием врача-акушер-гинеколога</td>
                        <td>
                          <span>460&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Прием врача общей практики (семейного врача)</td>
                        <td>
                          <span>440&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Прием врача-физиотерапевта</td>
                        <td>
                          <span>230&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>Прием врача по лечебной физкультуре</td>
                        <td>
                          <span>270&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>Прием врача-пульмонолога</td>
                        <td>
                          <span>250&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Прием фельдшером кабинета дерматовенеролога</td>
                        <td>
                          <span>120&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Прием фельдшера кабинета оториноларинголога</td>
                        <td>
                          <span>120&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Прием фельдшера кабинета психиатра-нарколога, фельдшера кабинета психиатра</td>
                        <td>
                          <span>140&nbsp;руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Кабинет акушер-гинеколога:</td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Введение внутриматочной спирали</td>
                        <td>
                          <span>340 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Удаление внутриматочной спирали</td>
                        <td>
                          <span>90 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Биопсия</td>
                        <td>
                          <span>210 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <strong>Кабинет офтальмолога:</strong>
                        </td>
                        <td>
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Периметрия глаз</td>
                        <td>
                          <span> ~ руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Биомикроскопия</td>
                        <td>
                          <span>90 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Тонометрия (измерение внутриглазного давления)</td>
                        <td>
                          <span>70 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Скиаскопия</td>
                        <td>
                          <span>60 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Определение цветоощущения</td>
                        <td>
                          <span>75 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Подбор очков</td>
                        <td>
                          <span>170 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Промывание слезных путей конъюктивного мешка</td>
                        <td>
                          <span>290 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Удаление инородного тела с роговицы и конъюктивы</td>
                        <td>
                          <span>240 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Массаж век</td>
                        <td>
                          <span>130 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Удаление неправильно растущих ресниц</td>
                        <td>
                          <span>150 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Циклоплегия</td>
                        <td>
                          <span>280 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Взятие мазка из глаз на флору и чувствительность к антибиотикам</td>
                        <td>
                          <span>35 руб.</span>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Взятие мазка из глаз на флору и чувствительность к антибиотикам</td>
                        <td>
                          <span>35 руб.</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                  <span className="badge-primary badge-pill icrb-number">5</span>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="headingEight"
                  data-parent="#accordionExample"
                >
                  <li className="list-group-item">
                    <strong>При проведении медицинских осмотров</strong>
                  </li>
                  <li className="list-group-item">Медицинские профилактические осмотры</li>
                  <li className="list-group-item">Медицинское освидетельствование на выявление ВИЧ - инфекции</li>
                  <li className="list-group-item">Медицинские осмотры (предрейсовые, послерейсовые)</li>
                  <li className="list-group-item">
                    <strong>При проведении медицинских освидетельствований</strong>
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
          </div>
        </div>{' '}
      </div>
    </section>
  )
}

export default Paid
