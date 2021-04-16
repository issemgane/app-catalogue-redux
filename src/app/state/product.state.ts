
export enum DataSatateEnum{
    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
  dataState:DataSatateEnum,
  data?:T
  errorMessage?:string


}