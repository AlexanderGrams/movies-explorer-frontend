import { Link } from "react-router-dom";
import "./notFound.sass"

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__wrap">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">
          Страница не найдена
        </p>
        <Link to={"/"} className="not-found__link">Назад</Link>
      </div>
    </main>
  );
}

export default NotFound;
