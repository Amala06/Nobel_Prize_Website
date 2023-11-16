import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [filterData, setFilterData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [itemsToShow, setItemsToShow] = useState(5); 
  const [bool,setBool]=useState(false);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 3); // Increase the number of items to show
  };

  const handleSearchYear = (event) => {
    setSearchYear(event.target.value);
  };

  useEffect(() => {
    fun();
  }, [selectedValue, searchYear,itemsToShow]);

  const fun = () => {
    axios
      .get("https://api.nobelprize.org/v1/prize.json")
      .then((res) => {
        // Filter based on category

        if (searchYear !== "") {
          const filteredByCategory = res.data.prizes.filter(
            (item) => item.year === searchYear
          );
          setFilterData(filteredByCategory);
          setBool(false);
        }
        if (selectedValue !=="") {
          const filteredByCategory = res.data.prizes.filter(
            (item) => item.category.toUpperCase() === selectedValue
          );
          setFilterData(filteredByCategory);
          setBool(false);
        }
        if (searchYear === "" && selectedValue === "") {
             const displayedItems = res.data.prizes.slice(0, itemsToShow);
             setFilterData(displayedItems);
             setBool(true);
        //   setFilterData(res.data.prizes);
        } 
        else if (searchYear !== "" && selectedValue !== "") {
          const filteredByCategory = res.data.prizes.filter(
            (item) => item.category.toUpperCase() === selectedValue
          );

          // Filter based on year
          const filteredByYear = filteredByCategory.filter(
            (item) => item.year === searchYear
          );

          setFilterData(filteredByYear);
          setBool(false);
        }

        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div className="home_section">
        <p className="title">
          <u >EXPLORE</u>
        </p>
        {/* <img src="images/f.png" alt="" /> */}
        <div className="dropdown">
          <input
            type="search"
            className="input_search"
            placeholder="ENTER THE YEAR B/W 1900-2018"
            value={searchYear}
            onChange={handleSearchYear}
          />
          <div>
            <label htmlFor="yourSelect">CHOOSE A CATEGORY : </label>
            <select
              id="yourSelect"
              value={selectedValue}
              onChange={handleChange}
              className="selectt"
            >
              <option value="" className="option">
                SELECT A FIELD
              </option>
              <option value="CHEMISTRY" className="option">
                Chemistry
              </option>
              <option value="LITERATURE" className="option">
                Literature
              </option>
              <option value="PHYSICS" className="option">
                Physics
              </option>
              <option value="PEACE" className="option">
                Peace
              </option>
              <option value="ECONOMICS" className="option">
                Economics
              </option>
              <option value="MEDICINE" className="option">
                Medicine
              </option>
            </select>
          </div>
        </div>

        {filterData.map((item) => (
          <div className="home_main" key={item.id}>
            <div className="text_main">
              <p className="home_category">{item.category.toUpperCase()}</p>
              <p className="home_year">{item.year}</p>
            </div>
            <div className="card_main">
              {item.laureates && item.laureates.length > 0 && (
                <div>
                  {item.laureates.map((nestedItem) => (
                    <div className="card_body" key={nestedItem.id}>
                      <p className="card_name">
                        {nestedItem.firstname} {nestedItem.surname}
                      </p>
                      <p className="motivation">{nestedItem.motivation}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {bool === true ? (
          <>
            {" "}
            <button onClick={handleShowMore} className="butt">
              Show More
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
