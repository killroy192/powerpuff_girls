import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export const useGetData = actionCreators => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(actionCreators.getData())
      return () => dispatch(actionCreators.cancelFetching())
    }, 
    [dispatch, actionCreators]
  );
}