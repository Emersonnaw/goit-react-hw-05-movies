import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Container, Header,  Link } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/movies">Movies</Link>
                </nav>
            </Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;


// const Home = lazy(() => import('../Pages/Home'));
// const Movies = lazy(() => import('../Pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));
// const SharedLayout = lazy(() => import('./SharedLayout'));