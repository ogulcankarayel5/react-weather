import { Input, Search } from "components";
import React, { useEffect, useState } from "react";
import styles from "pages/Home/components/sides/left/autocomplete/autocomplete.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import weatherActions from "store/wheather/actions";
import { useClickOutside, useDebounce, useWeather } from "hooks";

const containerVariants = {
  expanded: {
    height: "15rem",
  },
  collapsed: {
    height: "3rem",
  },
};

const containerTransition = { type: "spring", damping: 22, stiffness: 150 };

export const AutoComplete = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { searchLoading, searchResult } = useWeather();
  const [searchRef, isClickedOutside] = useClickOutside();

  useEffect(() => {
    setSearch("");
    dispatch(weatherActions.clearSearchResult());
  }, [dispatch, isClickedOutside]);

  const handleSearch = () => {
    if (!isTyping) return;

    dispatch(weatherActions.search({ q: search }));
  };

  const handleSearchLoading = () => {
    dispatch(weatherActions.weatherSearchRequest());
  };
  useDebounce(search, 500, handleSearch, handleSearchLoading);

  //requires 3 characters long for api
  const isTyping = search.replace(/\s+/, "").length > 2;
  return (
    <div
      className={styles.searchContainer}
      ref={searchRef as React.RefObject<HTMLDivElement>}
    >
      <span className={styles.searchIcon}>
        <Search />
      </span>
      <Input
        className={styles.searchInput}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
        placeholder="Search place..."
      />
      {isTyping && (
        <motion.div
          animate={isTyping ? "expanded" : "collapsed"}
          variants={containerVariants}
          transition={containerTransition}
          className={styles.suggestions}
        >
          {searchLoading && <span>loading...</span>}

          {searchResult.length === 0 && !searchLoading && (
            <div>Sonuç bulunamadı</div>
          )}
          {searchResult.length !== 0 &&
            !searchLoading &&
            searchResult.map((item) => <div>{item.name}</div>)}
        </motion.div>
      )}
    </div>
  );
};
