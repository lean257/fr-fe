import { useLocation } from "react-router-dom";
import Slide from "./Slide";
export default function SearchResult() {
  const location = useLocation();
  const searchResult = location.state?.searchResult;
  return <Slide movies={searchResult} />;
}
