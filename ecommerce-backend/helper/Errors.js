"use strict";
var errors = {
	"invalid_parameters" 										: [100, "Invalid Parameters"],
	"server_error"		 										: [500, "Something went wrong"],
	"no_server_response"										: [2300,"No response from server"],
	"invalid_email"												: [101, "Invalid Email Id"],
	"user_already_exists"										: [102, "User email already exists"],
	"page_not_found"											: [404,"Sorry! Page not found"],
	"account_not_found"											: [404,"Account was not found."],
	"profile_not_found"											: [404,"Profile was not found."],
	"unable_to_update"											: [500,"Unable to update right now, please try after some time"],
	"account_already_exists"									: [409,"Account already exists."],
	"profile_already_exists"									: [409,"Profile already exists."],
    "invalid_type_of_password"									: [400,"Password must be string"],
	"short_password"        									: [400,"Please enter a password at least 6 characters long"],
	"incorrect_old_password"    								: [400,"Old password is incorrect"],
	"incorrect_password"    									: [400,"Password you enter is incorrect"],
	"password_not_match"    									: [400,"Password not match"],
	"verify_email"		           								: [34000, "Please verify your email"],
	"verify_account_first"										: [401, "Please verify your account first"],
	"invalid_url"												: [400,"Invalid url"],
	"email_alredy_taken"										: [400,"This email is alredy linked with another account"],
	"email_required"											: [400,"Email is required"],
	"invalid_phone_number"										: [400,"Invalid phone number"],
	"invalid_permission"										: [400,"Invalid permisson"],
	"invalid_permission_status"									: [400,"Invalid permisson status"],
	"jwt_verify_error"											: [500,"JWT verify error "],
	"jwt_token_expired"											: [498,"JWT token expired"],
	"jwt_token_not_found"										: [403,"JWT Token not found"],
	"unauthorised"												: [401,"You are not authorised"],
	"mongo_error"												: [500,"Mongo error !"],
	"invalid_quantity"											: [800, "Product Quantity Selected in invalid"],
	"invalid_product"											: [801, "Invalid Product"],
	"product_not_found"											: [802, "Product ordered not found"],
	"product_not_avail"											: [803, "This Product is not available for ordering"],
	"total_stock_empty"											: [804, "There is no stock available, Please try after a while"],
	"decrease_order_quantity"									: [805, "Please reorder by decreasing ordering quantity,due to lack of stock"],
	"order_not_found"											: [806, "Order not found!"],
	"invalid_order"												: [807, "Invalid Order"],
	"invalid_amount_paid"										: [808, "Invalid Amount Paid"],
	"payment_failed"											: [809, "Payment failed"],
	"invalid_action"											: [400,"The action you are going to perform is invalid or expired"],
};

module.exports = errors; 