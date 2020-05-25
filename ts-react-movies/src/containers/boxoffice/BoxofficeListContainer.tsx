import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { format, subDays } from "date-fns";

import { RootState } from "../../modules";
import BoxofficeList from "../../components/boxoffice/BoxofficeList";
import { getDaily, getWeekly } from "../../modules/boxoffice";
import LoadingPage from "../../components/common/LoadingPage";

interface BoxofficeListContainerProps {
  type: string;
  loading: boolean;
  getDaily: Function;
  getWeekly: Function;
  daily: any;
  weekly: any;
}

const BoxofficeListContainer: React.FC<BoxofficeListContainerProps> = ({
  loading,
  getDaily,
  getWeekly,
  daily,
  weekly,
  type,
}) => {
  useEffect(() => {
    type === "daily"
      ? getDaily(format(subDays(new Date(), 1), "yyyyMMdd"))
      : getWeekly(format(subDays(new Date(), 7), "yyyyMMdd"));
  }, [getDaily, getWeekly, type]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <BoxofficeList
          type={type}
          boxoffice={type === "daily" ? daily : weekly}
        />
      )}
    </>
  );
};

export default connect(
  (state: RootState) => ({
    loading: state.boxoffice.loading,
    daily: state.boxoffice.daily,
    weekly: state.boxoffice.weekly,
  }),
  { getDaily, getWeekly }
)(BoxofficeListContainer);
