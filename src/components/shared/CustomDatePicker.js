import React from 'react';
import DatePicker from 'react-native-date-picker';
const CustomDatePicker = ({isOpen, setIsOpen, date, setDate, onConfirm}) => {
  return (
    <>
      <DatePicker
        mode="date"
        modal
        open={isOpen}
        date={date}
        onConfirm={date => {
          onConfirm(date.toISOString().split('T')[0]);
          setIsOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};
export default CustomDatePicker;
