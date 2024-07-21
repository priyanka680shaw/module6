## eComm Project Modules

### eComm User Facing WebApp
1. User => Login, SignUp, Logout, Forgot Password, Reset Password etc
2. Product => Prod CRUD withuct , Read -> List product, Product Details
3. Cart => Add to cart, Remove From Cart, Wishlist etc
4. Checkout Module => Placing an order, Making Payments etc
5. Misc => View order history etc

### Seller Portal

### Admin Portal
Roles : Customer, Seller, Admin


how will the product list api know that the user is logged in and WHICH USER IS CALLING THE API?
when the user logs in save isLogged true in users collection for that user.

unauthorized?
authorization?
authentication?
//2nd class //topics which i have understood 1.Authentaction , enum , we created token usiing uuid but it won't follows any standerd for the token there is an standrd  i.e JWT((jjwt.io)) (encoding=>to convert any data into any format is encoding  / decoding =>to convert encodded data into its original from is decoding) iat bhi milte that is time in epochtimestamp  secodds(epocconverter me time dakh sakte ho) epochtime is issuedd time and we need to set  the expire time of the token (issued by default  and expire we need to set bby  our own) epoch tiome stamp  is second me times ko date hai//
Authentication : To verify the user if they are the same user they claim to be (Login)
Authorization : Verifying the access level (permission) of the user (Role of the user)

JWT (Json Web Token)


abcd12345 => Plain Text

asdf&*S*F9738947ff30_!%^# => Cipher Text

Encode / Decode => Not related to security (Std conversion for different systems) 2 Way Process

Encryption / Decryption => 2 Way process

Hashing => 1 Way Process


100 Records
10 Items Per page -> 10 Pages

Page Size = 10
Page No -> 1 ==> 1 - 10
Page No -> 2 ==> 11 - 20
Page No -> 3 ===> 21 - 30
.....


Middlewares

Cart : [
    {
        _id: ObjectId(""),
        qty: 1
    },
    {
        _id: ObjectId(""),
        qty: 2
    },
]


1. Registration / Signup (isProfileVerified: false, otp: 1234, otpToken: "asdfasd-fasdf24ef", otpGeneratedAt: "") // Email for OTP
2. Otp Validation /verify-otp (Req Body : otp, otpToken)