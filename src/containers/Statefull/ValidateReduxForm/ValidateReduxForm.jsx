import React from "react";
import Form from "../../../components/Form/Form";
import { formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";
import { validateNotEmpty, validateNumber } from "../../../utilities/validates/validates";
import { InputField } from "../../../components/fields/InputField/InputField";

const formName = "validateReduxForm";
const selector = formValueSelector(formName);

class ValidateReduxForm extends React.PureComponent {
  static mapStateToProps = state => ({
    formValues: selector(state, "name", "age")
  });

  constructor(props) {
    super(props);

    this.setFormValues = this.setFormValues.bind(this);

    this.state = {
      values: null
    };
  }

  setFormValues(values) {
    this.setState({ values });
  }

  render() {
    return (
      <div>
        <h1>Форма с валидацией</h1>
        <Form formSubmit={this.setFormValues} form={formName}>
          <div className="data">Отправленные данные: {JSON.stringify(this.state.values)}</div>
          <div className="data">Введенные данные: {JSON.stringify(this.props.formValues)}</div>
          <Field
            name="name"
            component={InputField}
            type="text"
            label="Имя"
            validate={validateNotEmpty}
          />
          <Field
            name="age"
            component={InputField}
            type="text"
            label="Возраст"
            validate={[validateNotEmpty, validateNumber]}
          />
          <button type="submit">Отправить</button>
        </Form>
      </div>
    );
  }
}

export default connect(ValidateReduxForm.mapStateToProps)(ValidateReduxForm);
