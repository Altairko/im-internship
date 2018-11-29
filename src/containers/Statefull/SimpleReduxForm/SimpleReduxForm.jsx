import React from "react";
import Form from "../../../components/Form/Form";
import { formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";

const formName = "simpleReduxForm";
const selector = formValueSelector(formName);

class SimpleReduxForm extends React.PureComponent {
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
        <h1>Простая форма</h1>
        <Form formSubmit={this.setFormValues} form={formName}>
          <div className="data">Отправленные данные: {JSON.stringify(this.state.values)}</div>
          <div className="data">Введенные данные: {JSON.stringify(this.props.formValues)}</div>
          <Field name="name" component="input" type="text" placeholder="Имя" />
          <Field name="age" component="input" type="text" placeholder="Возраст" />
          <button type="submit">Отправить</button>
        </Form>
      </div>
    );
  }
}

export default connect(SimpleReduxForm.mapStateToProps)(SimpleReduxForm);
