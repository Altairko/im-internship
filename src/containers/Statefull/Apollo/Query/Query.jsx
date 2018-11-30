import React from "react";
import Form from "../../../../components/Form/Form";
import { formValueSelector, Field } from "redux-form";
import { connect } from "react-redux";
import { validateNotEmpty } from "../../../../utilities/validates/validates";
import { InputField } from "../../../../components/fields/InputField/InputField";
import { getUserData } from "../../../../store/userData/userData.selector";
import { addUserData, resetUserData } from "../../../../store/userData/userData.action";
import { withApollo } from "react-apollo";

const formName = "queryApollo";
const selector = formValueSelector(formName);

class Query extends React.PureComponent {
  static mapStateToProps = state => ({
    formValues: selector(state, "name", "age"),
    userData: getUserData(state)
  });

  constructor(props) {
    super(props);

    this.setFormValues = this.setFormValues.bind(this);
    this.resetFormValues = this.resetFormValues.bind(this);
  }

  setFormValues(values) {
    this.props.dispatch(addUserData(values));
  }

  resetFormValues() {
    this.props.dispatch(resetUserData());
  }

  render() {
    return (
      <div>
        <h1>Форма с валидацией</h1>
        <Form formSubmit={this.setFormValues} form={formName}>
          <div className="data">Отправленные данные: {JSON.stringify(this.props.userData)}</div>
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
            type="password"
            label="Пароль"
            validate={validateNotEmpty}
          />
          <button type="submit">Отправить</button>
          <button type="button" className="reset-button" onClick={this.resetFormValues}>
            Сбросить значения в redux store
          </button>
        </Form>
      </div>
    );
  }
}

export default withApollo(connect(Query.mapStateToProps)(Query));
