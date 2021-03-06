import {
  ADD_DOCTOR_REQUEST,
  ADD_DOCTOR_SUCCESS,
  ADD_DOCTOR_FAIL,
  GET_DOCTORS_REQUEST,
  GET_DOCTORS_SUCCESS,
  GET_DOCTORS_FAIL,
} from "@redux/types";

export const addDoctorReducer = (state = { isLoading: false }, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DOCTOR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_DOCTOR_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_DOCTOR_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export const doctorListReducer = (
  state = { isLoading: false, doctors: [] },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DOCTORS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_DOCTORS_SUCCESS:
      return {
        ...state,
        doctors: payload,
        isLoading: false,
      };

    case GET_DOCTORS_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
