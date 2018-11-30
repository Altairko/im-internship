import React from "react";
import Form from "../../../../components/Form/Form";
import { connect } from "react-redux";
import { withApollo } from "react-apollo";
import { Field } from "redux-form";
import { getAuthToken } from "../../../../store/auth/auth.selector";
import { saveToken } from "../../../../store/auth/auth.action";
import { getErrors } from "../../../../store/errors/errors.selector";
import { saveErrors } from "../../../../store/errors/errors.action";
import { registerMutate } from "../../../../grapqhl/mutation/register";
import { validateNotEmpty } from "../../../../utilities/validates/validates";
import { InputField } from "../../../../components/fields/InputField/InputField";

const formName = "simpleMutationForm";

class Mutation extends React.PureComponent {
  static mapStateToProps = state => ({
    token: getAuthToken(state),
    errors: getErrors(state)
  });

  constructor(props) {
    super(props);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(values) {
    this.props.client
      .mutate({
        mutation: registerMutate,
        variables: values
      })
      .then(response => {
        const data = response.data;
        if (data && !data.errors) {
          this.props.dispatch(saveToken({ token: data && data.register && data.register.token }));
          localStorage.setItem("token", data && data.register && data.register.token);
        }
      })
      .catch(response => {
        this.props.dispatch(saveErrors({ errors: response.message }));
      });
  }

  render() {
    return (
      <div className="redux-form">
        <h1>Простая форма</h1>
        <Form formSubmit={this.onFormSubmit} form={formName}>
          <div className="data">Ошибки: {JSON.stringify(this.props.errors)}</div>
          <div className="data">Токен из store: {JSON.stringify(this.props.token)}</div>
          <div className="data">Токен из localStorage: {localStorage.getItem("token")}</div>
          <Field
            name="email"
            component={InputField}
            type="text"
            placeholder="Имя"
            validate={validateNotEmpty}
          />
          <Field
            name="password"
            component={InputField}
            type="password"
            placeholder="Пароль"
            validate={validateNotEmpty}
          />
          <button type="submit">Отправить</button>
        </Form>
      </div>
    );
  }
}

export default withApollo(connect(Mutation.mapStateToProps)(Mutation));
