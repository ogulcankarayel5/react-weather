import { Cancel, Input, Search } from "components";
import React, { useEffect, useState } from "react";
import styles from "pages/Home/components/sides/left/autocomplete/autocomplete.module.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import weatherActions from "store/wheather/actions";
import { useClickOutside, useDebounce, useWeather } from "hooks";
import { AutocompleteItem } from "pages/Home/components";
import Skeleton from "react-loading-skeleton";

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
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const { searchLoading, searchResult } = useWeather();
  const [searchRef, isClickedOutside] = useClickOutside();

  //requires 3 characters long for api
  const isTyping = search.replace(/\s+/, "").length > 2;

  useEffect(() => {
    handleClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isClickedOutside]);

  const handleClose = () => {
    setSearch("");
    setExpanded(false);
    dispatch(weatherActions.clearSearchResult());
  };
  const handleSearch = () => {
    if (!isTyping) return;

    dispatch(weatherActions.search({ q: search }));
  };

  const handleSearchLoading = () => {
    if (!isTyping) return;

    dispatch(weatherActions.weatherSearchRequest());
  };

  useDebounce(search, 500, handleSearch, handleSearchLoading);

  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };

  const clickHandler = (name: string, url: string) => {
    setExpanded(false);
    setSearch(name);
    dispatch(weatherActions.getCurrentWeather({ q: url, aqi: 'yes', days: 3 }))
  };
  console.log(expanded);
  return (
    <div
      className={styles.searchContainer}
      ref={searchRef as React.RefObject<HTMLDivElement>}
    >
      <span className={styles.searchIcon}>
        <Search />
      </span>
      <Input
        onClick={() => setExpanded(true)}
        className={styles.searchInput}
        value={search}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Search place..."
      />

      {expanded && (
        <>
          <span onClick={handleClose} className={styles.cancelIcon}>
            <Cancel />
          </span>
          <motion.div
            animate={isTyping ? "expanded" : "collapsed"}
            variants={containerVariants}
            transition={containerTransition}
            className={styles.suggestions}
          >
            {searchLoading && (
              <Skeleton
                className={styles.autocompleteItem}
                width={`75%`}
                height={13}
                count={3}
              />
            )}

            {searchResult.length === 0 && !searchLoading && isTyping && (
              <div className={styles.empty}>
                {search} ile alakalı sonuç bulunamadı
              </div>
            )}
            {searchResult.length !== 0 &&
              !searchLoading &&
              searchResult.map((item) => (
                <AutocompleteItem
                  onClick={() => clickHandler(item.name, item.url)}
                  name={item.name}
                />
              ))}
          </motion.div>
        </>
      )}
    </div>
  );
};
