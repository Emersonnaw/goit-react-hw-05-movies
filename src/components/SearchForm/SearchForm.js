import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { FormCastom, Button,FieldCastom } from './SearchForm.styled';
import 'react-toastify/dist/ReactToastify.css';

const SearchForm = ({ onFormData }) => { 
    const schema = Yup.object().shape({
        search: Yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
    });
    
    let initialValue = {
    search:''
};
    
    const handleSubmit = ({ search }, { resetForm }) => {
        if (search.trim() === '') {
            toast.error(`Request cannot contain an empty string`, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
            });  
            return;
        }

    onFormData(search.toLowerCase());
        resetForm();
    }
    return (
            <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
                <FormCastom >
                    <FieldCastom
                        autoFocus
                        type="text"
                        name="search"
                        placeholder="Input your query"
                />
                <Button type="submit" > Search</Button>
                <ErrorMessage name='search' component="div"/>
                </FormCastom>
            </Formik>
    );
}

SearchForm.propTypes = {
    onFormData: PropTypes.func.isRequired
};

 export default SearchForm;