import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { YellowButton } from '@common'
import { setSigned } from '@redux/actions/announcements';

const Registration = ({ isSignUp }) => {
  const dispatch = useDispatch();
  const [registrationUserName, setRegistrationUserName] = useState(''); // test
  const [registrationUserSurname, setRegistrationUserSurname] = useState('Smith'); // test
  const [registrationUserDepartment, setRegistrationUserDepartment] = useState('DIT'); // test
  const [registrationDone, setRegistrationDone] = useState(false); // test
  const [isRegistrationBtnActive, setRegistrationsBtnActive] = useState(true);
  const [isRegistrationInsert, setRegistrationIsInsert] = useState(false);
  const [isRegistrationDepart, setRegistrationIsDepart] = useState(false);
  const [isRegistrationNext, setRegistrationIsNext] = useState(0);

  let newUserData = {
    name: registrationUserName,
    surname: registrationUserSurname,
    department: registrationUserDepartment
  };

  const inputHandler = (e) => {
    if (e.currentTarget.name === 'registrationUserName') {
      setRegistrationUserName(e.currentTarget.value);
      setRegistrationsBtnActive(false);
    } else if (e.currentTarget.name === 'registrationUserSurname') {
      setRegistrationUserSurname(e.currentTarget.value);
      setRegistrationsBtnActive(false);
    } else if (e.currentTarget.name === 'registrationUserDepartment') {
      setRegistrationUserDepartment(e.currentTarget.value);
      setRegistrationsBtnActive(false);
    }
  }

  const confirmHandler = (e) => {
    e.preventDefault();

    if (registrationUserName !== '') {
      setRegistrationIsNext(isRegistrationNext + 1);
    }
  }

  const confirmUserData = (e) => {
    e.preventDefault();

    if (e.currentTarget.name === 'registrationUserSurname') {
      setRegistrationIsInsert(false);
    } else if (e.currentTarget.name === 'registrationUserDepartment') {
      setRegistrationIsDepart(false);
    } else if (e.currentTarget.name === 'registrationDone') {
      setRegistrationDone(true);
      setRegistrationIsNext(isRegistrationNext + 1);
    }
  }

  const rejectHandler = (e) => {
    e.preventDefault();

    if (e.currentTarget.name === 'isRegistrationInsert') {
      setRegistrationIsInsert(true);
      setRegistrationsBtnActive(true);
    } else if (e.currentTarget.name === 'isRegistrationDepart') {
      setRegistrationIsDepart(true);
      setRegistrationsBtnActive(true);
    }
  }

  const backToName = (e) => {
    e.preventDefault();

    setRegistrationIsNext(isRegistrationNext - 1);
  }

  const sendUserData = (e) => {
    e.preventDefault();

    dispatch(setSigned(newUserData));
  }

  return (
    <div className={cn(
      'registration',
      {
        'signIn': !isSignUp
      }
    )}>
      <div className="registration__panel">

        <h2>Регистрация</h2>
        <form className="registration__form">

          <div className={cn(
            'registration__userNameContainer',
            {
              'registrationActive': isRegistrationNext === 0
            }
          )}>
            <label className="registration__userName">
              Введите имя
              <input
                type="text"
                name="registrationUserName"
                value={registrationUserName}
                onChange={inputHandler}
                placeholder="Ваше имя"
              />
            </label>

            <div className="registration__yesOrNoButtons yesOrNoButtons">
              <div className="yesOrNoButtons__confirm">
                <YellowButton
                  onPush={confirmHandler}
                  disable={isRegistrationBtnActive}
                >Далее</YellowButton>
              </div>
            </div>
          </div>

          <div className={cn(
            'registration__userSurnameContainer userSurnameContainer',
            {
              'registrationSurnameActive': isRegistrationNext === 1
            }
          )}>
            <div className="userSurnameContainer__back" onClick={backToName}>Назад</div>
            <div className={cn(
              'userSurnameContainer__confimButtons',
              {
                'registrationConfimButtons': !isRegistrationInsert && isRegistrationNext === 1
              }
            )}>
              <label>
                <div>Ваша фамилия <b>{registrationUserSurname}</b>?</div>
              </label>
              <div className="registration__yesOrNoButtons yesOrNoButtons">
                <div className="yesOrNoButtons__confirm">
                  <YellowButton
                    onPush={confirmHandler}
                  >Да</YellowButton>
                </div>

                <div className="yesOrNoButtons__reject">
                  <YellowButton
                    name="isRegistrationInsert"
                    onPush={rejectHandler}
                    theme="bordered"
                  >Нет</YellowButton>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            'userSurnameContainer__insertSurname',
            {
              'isRegistrationInsert': isRegistrationInsert && isRegistrationNext === 1
            }
          )}>
            <label className="registration__userName">
              Введите фамилию
              <input
                type="text"
                name="registrationUserSurname"
                value={registrationUserSurname}
                onChange={inputHandler}
                placeholder="Ваша фамилия"
              />
            </label>

            <div className="registration__yesOrNoButtons yesOrNoButtons">
              <div className="yesOrNoButtons__confirm">
                <YellowButton
                  name="registrationUserSurname"
                  onPush={confirmUserData}
                  disable={isRegistrationBtnActive}
                >Далее</YellowButton>
              </div>
            </div>
          </div>

          <div className={cn(
            'registration__depart registrationDepart',
            {
              'registrationDepartActive': isRegistrationNext === 2
            }
          )}>
            <div className="userSurnameContainer__back" onClick={backToName}>Назад</div>
            <div className={cn(
              'userSurnameContainer__confimButtons',
              {
                'registrationConfimButtons': !isRegistrationDepart && isRegistrationNext === 2
              }
            )}>
              <label>
                <div>Ваша отдел <b>{registrationUserDepartment}</b>?</div>
              </label>
              <div className="registration__yesOrNoButtons yesOrNoButtons">
                <div className="yesOrNoButtons__confirm">
                  <YellowButton
                    onPush={confirmHandler}
                  >Да</YellowButton>
                </div>

                <div className="yesOrNoButtons__reject">
                  <YellowButton
                    name="isRegistrationDepart"
                    onPush={rejectHandler}
                    theme="bordered"
                  >Нет</YellowButton>
                </div>
              </div>
            </div>

            <div className={cn(
              'registrationDepart__insertDepartment',
              {
                'isRegistrationDepart': isRegistrationDepart && isRegistrationNext === 2
              }
            )}>
              <label className="registration__depart">
                Введите ваш отдел
                <input
                  type="text"
                  name="registrationUserDepartment"
                  value={registrationUserDepartment}
                  onChange={inputHandler}
                  placeholder="Ваша фамилия"
                />
              </label>

              <div className="registration__yesOrNoButtons yesOrNoButtons">
                <div className="yesOrNoButtons__confirm">
                  <YellowButton
                    name="registrationUserDepartment"
                    onPush={confirmUserData}
                    disable={isRegistrationBtnActive}
                  >Далее</YellowButton>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(
            'registration__complete registrationComplete',
            {
              'completeRegistration': !isRegistrationInsert && !isRegistrationDepart && isRegistrationNext === 3
            }
          )}>
            <div className="registrationComplete__check">
              <h3 className="h2HeaderWhite">Проверьте данные</h3>
              <div className="registration__checkData">
                <h3 className="h2Header">Вас зовут: <b>{`${newUserData.surname} ${newUserData.name}`}</b></h3>
                <h3 className="h2Header">Ваш отдел: <b>{newUserData.department}</b></h3>
              </div>

              <div className="registration__yesOrNoButtons yesOrNoButtons">
                <div className="yesOrNoButtons__confirm">
                  <YellowButton
                    name="registrationDone"
                    onPush={confirmUserData}
                  >Все верно</YellowButton>
                </div>

                <div className="userSurnameContainer__back" onClick={backToName}>Назад</div>
              </div>
            </div>
          </div>
          <div className={cn(
            'registrationComplete__done',
            {
              'finish': registrationDone
            }
          )}>
            <h2>завершена!</h2>

            <div className="registration__yesOrNoButtons yesOrNoButtons doneRegistrationBtn">
              <div className="yesOrNoButtons__confirm">
                <YellowButton
                  name="registrationUserDepartment"
                  onPush={sendUserData}
                  disable={isRegistrationBtnActive}
                >OK</YellowButton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration;
