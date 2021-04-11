import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import globalContext from "../../../lib/state/GlobalContext";
import axios from "axios";
import dashboardStyles from "../../../styles/Dashboard.module.css";

function Dashboard() {
  const { baseUrl } = useContext(globalContext);
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    const { books } = await getBookData(baseUrl);
    setBooks(books);
  }, []);

  if (!books.length) return <></>;
  return (
    <div className={dashboardStyles.container}>
      <div className={dashboardStyles.booksContainer}>
        {books.map((book) => {
          return (
            <div className={dashboardStyles.bookContainer} key={book.id}>
              <Link href={`/${book.id}`}>
                <img src={`https://www.perlego.com/${book.Location}/${book.Cover_File}`}></img>
              </Link>
              <h4>{book.Title_DistinctivetitlebookCovertitle_TitleText}</h4>
              <p>{book.Contributor1_PersonName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;

async function getBookData(baseUrl, userId) {
  const { data } = await axios.get(`${baseUrl}/books`);
  return data;
}
