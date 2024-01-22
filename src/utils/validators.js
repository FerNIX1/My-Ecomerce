const EmailValidation={
    value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message:"Invalid addres"
};

 const MinPassword={
    value:8,
    message:"Password must be al least 8 characters"
};
 const MaxPassword={
    value:24,
    message:"Password must be less than 24 characters"
};
export {EmailValidation,MaxPassword,MinPassword};