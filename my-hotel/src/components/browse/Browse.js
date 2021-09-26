import { PropertyResults } from './PropertyResults';
import Heading from '../content/Heading';
import BreadcrumbNavigation from '../content/BreadcrumbNavigation';
import Container from 'react-bootstrap/Container';
import wrapperstyle from '../layout/wrapperstyle.module.css';

export const Browse = () => {
    document.title = "Properties at Holidaze";
    return (
        <>
                <Container>
                    <BreadcrumbNavigation currentPage="Properties" currentPageTitle="Browse Properties"/>
                    <Heading content="Properties" url="/" buttonContent="Back to homepage" />
                    <PropertyResults />
                </Container>
                <div className={`${wrapperstyle.wrapper} ${wrapperstyle.browsepage}`}></div>
        </>
    );
};