import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import birthdayStar from "@assets/icons/LightYellowStar.svg";
import plugFemale from "@assets/Plugs/PlugFemale.png";
import plugMale from "@assets/Plugs/PlugMale.png";

const UserBirthdayCard = ({ user }) => {
  const addSmile = (e) => {
    e.preventDefault();

    console.log("Smile open");
  };

  const validate = (values) => {
    const errors = {};

    if (!values.birthMessage) {
      errors.birthMessage = "Напишите поздравление";
    } else if (values.birthMessage.length > 100) {
      errors.birthMessage =
        "Поздравление слишком длинное (максимум 100 символов)";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      birthMessage: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      const bithdayMessageData = {
        writerId: "writer id",
        birthdayPersonId: user.id,
        birthdayMessage: values.birthMessage,
      };
      console.log(bithdayMessageData);

      resetForm();
    },
  });

  return (
    <div key={user.id} className="personEvent__card">
      <div className="personEvent__cardHeader">
        {user.img ? (
          <img src={user.img} alt={`${user.name} ${user.secondName}`} />
        ) : user.sex === "female" ? (
          <img src={plugFemale} alt={`${user.name} ${user.secondName}`} />
        ) : (
          <img src={plugMale} alt={`${user.name} ${user.secondName}`} />
        )}
      </div>
      <div className="personEvent__cardBody">
        <div className="personEvent__personInfo">
          <h2 className="personEvent__name">{`${user.name} ${user.lastName}`}</h2>
          <h3 className="personEvent__depart">{user.depart}</h3>
        </div>
        <div className="personEvent__personCorpCongrat">
          <img src={birthdayStar} alt="Star" />
          <p className="personEvent__corpCongratText">{user.corpCongrat}</p>
        </div>

        <hr />

        <div className="personEvent__personCongrats">
          {user.commonCongrats
            ? user.commonCongrats.map((congrats) => {
                return (
                  <div
                    key={congrats.id}
                    className="personEvent__eventMessage eventMessage"
                  >
                    <span className="eventMessage__name">{congrats.name}</span>
                    <div className="eventMessage__message">
                      {congrats.message}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <hr />

      <div className="todayBirthday__cardFooter">
        <form onSubmit={formik.handleSubmit}>
          <label>
            Оставьте поздравление!
            <textarea
              id="birthMessage"
              type="text"
              name="birthMessage"
              value={formik.values.birthMessage}
              onChange={formik.handleChange}
              placeholder="Напишите поздравление..."
            />
          </label>

          {formik.errors.birthMessage ? (
            <div className="error">{formik.errors.birthMessage}</div>
          ) : (
            <div className="error"></div>
          )}

          <div className="todayBirthday__btnContaier">
            <button className="todayBirthday__emoji" onClick={addSmile}>
              <FontAwesomeIcon icon={faFaceSmile} />
            </button>
            <button type="submit" className="todayBirthday__sendBtn">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserBirthdayCard;
