<template>
	<b-container>
		<div class="containerr" style="max-width: 500px; text-align: left">
			<!-- <div >
		<router-link to="/sign-up" class="btn btn-link">S'inscrire</router-link>
		<router-link to="/" class="btn btn-link" >Se connecter</router-link>
</div> -->
			<div v-if="status === 'ERROR'" class="global-message error">
				ERROR: Please do the right thing
			</div>
			<div v-if="status === 'REQUEST-SUCCESS'" class="global-message success">
				SUCCESS: Welcome onboard
			</div>
			<div v-if="status === 'REQUEST-ERROR'" class="global-message error">
				OOPS: Something went wrong
			</div>
			<form @submit.prevent="submit">
				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						required
						placeholder="Enter email"
						v-model="form.email"
						id="input-1"
						name="email"
						class="form-control"
						:class="{'is-invalid': isSubmitted && $v.email.$error}"
					/>
					<div
						v-if="isSubmitted && !$v.email.required"
						class="invalid-feedback"
					>
						<span v-if="$v.email.required">Email field is required</span>
						<span v-if="!$v.email.email">Please provide valid email</span>
					</div>
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input
						type="password"
						required
						placeholder="Enter password"
						v-model="form.password"
						id="input-2"
						name="password"
						class="form-control"
						:class="{'is-invalid': isSubmitted && $v.password.$error}"
					/>
					<div
						v-if="isSubmitted && $v.password.$error"
						class="invalid-feedback"
					>
						<span v-if="$v.password.required">Password field is required</span>
					</div>
				</div>
				<br />
				<b-button type="submit" variant="primary">Se connecter</b-button>
				<br>
			</form>
		</div>
	</b-container>
</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {required, minLength, email} from 'vuelidate/lib/validators';

export default {
	name: 'SignIn',

	data() {
		return {
			form: {
				email: '',
				password: '',
			},
			isSubmitted: false,
			status: undefined,
		};
	},
	validations: {
		name: {required},
		email: {
			required,
			email,
		},
		password: {required, minLength: minLength(5)},
		
	},
	methods: {
		validate() {
			this.isSubmitted = true;
			this.$v.$touch();
			if (this.$v.$invalid) {
				this.status = 'REQUEST-SUCCESS';
				return false;
			}
			return true;
		},
		submit() {
			const isValidated = this.validate();
			if (isValidated) {
				return;
			}
			axios
				.post('http://localhost:3000/sign-in', this.form)
				.then((response) => {
					if (response.data == 'sorry we dont know this user') {
						this.status = 'ERROR';

						// console.log('response.data', response.data);
					} else {
						const decoded = jwt.decode(response.data);
						console.log('token decodé =', decoded);
						// let save = {
						// 	pseudo: decoded.user_pseudo,
						// 	id: decoded.user_id,
						// };
						console.log('decoded', decoded);
						this.$store.dispatch('addToken', response.data);
						this.$store.dispatch('addPseudo', decoded.user_pseudo);
						this.$store.dispatch('addId', decoded.user_id);
						console.log('id user', decoded.user_id);

						this.status = 'REQUEST-SUCCESS';
						this.$router.push('/dashboard');
					}
				})
				.catch(function(err) {
					this.status = 'REQUEST-ERROR';
					console.log(err);
				});
		},
	},
};
</script>

<style>
.error-message {
	color: red;
}
.containerr,
.container-fluid{
	margin-right: 2px;
    margin-left: 2px;
	width: 100%;
	
}
input:focus {
	outline: none;
}
.error {
	border: 1px solid red;
}
.form {
	display: inline-block;
	text-align: center;
	width: 49%;
}
.validators {
	display: inline-block;
	width: 49%;
	text-align: center;
	vertical-align: top;
}
.input {
	padding: 5px;
}
element.style {
	max-width: 500px;
	text-align: left;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

</style>
