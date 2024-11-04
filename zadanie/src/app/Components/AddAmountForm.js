// AddAmountForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().min(3, 'Tytuł jest za krótki')
        .required('Tytuł jest wymagany'),
    amount: Yup.number().positive('Tylko liczby dodatnie')
        .required('Kwota wymagana'),
    category: Yup.string()
        .required('Kategoria wymagana!'),
    date: Yup.date()
        .typeError('NIEPRAWIDŁOWA DATA')
        .required('Data wymagana!')
});

export default function AddAmountForm({categories, onNewAmount = f => f }) {
    const initialValues = {
        title: '',
        amount: 1,
        category: '',
        date: ''
    };

    const handleSubmit = (values, { resetForm }) => {
        onNewAmount(
            values.title,
            values.amount,
            values.category,
            values.date
        );
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ dirty, isValid }) => (
                <Form>
                    <div>
                        <Field className="input" name="title" type="text" placeholder="Podaj tytuł" />
                        <ErrorMessage name="title" component="div" className="error" />
                    </div>
                    <div>
                        <Field className="input" name="amount" type="number" placeholder="Podaj wydatek" />
                        <ErrorMessage name="amount" component="div" className="error" />
                    </div>
                    <Field as={"select"} name={"category"}>
                        <option value='' label={'wybierz kategoryje'}></option>
                        {categories.map((cat, index)=>{
                            return (
                                <option key={index} value={cat}>{cat}</option>
                            )
                        })}

                    </Field>

                    <div>
                        <Field className="input" name="date" type="date" />
                        <ErrorMessage name="date" component="div" className="error" />
                    </div>

                    <button
                        className="button"
                        type="submit"
                        disabled={!dirty || !isValid}
                    >
                        Dodaj
                    </button>
                </Form>
            )}
        </Formik>
    );
}