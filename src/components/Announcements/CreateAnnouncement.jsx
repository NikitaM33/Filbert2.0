import React from 'react';
import cn from 'classnames';

import { HeaderText, Registration } from '@common';
import { useSelector, useDispatch } from 'react-redux';
// import { setSigned } from '../../redux/actions/announcements';

const CreateAnnouncement = () => {
  const dispatch = useDispatch();
  const { signedIn } = useSelector(({ announcements }) => announcements);
  // const [ isSigned, setIsSigned ] = useState(signedIn);

  console.log('isSigned:', signedIn)

  return (
    <div className="makeAnnouncement">
      <div className="wrapper">
        <div className="makeAnnouncement__header">
          <HeaderText
            h2Header={'Напишите любое послание'}
            h1Header={'Доска объявлений'}
            pHeader={'Здесь можно написать то, что увидет весь Филберт. Вы можете использовать данный блок в качестве доски обявлений или позвать всех посидеть в баре после работы'}
          />
        </div>

        <Registration
          isSignUp={signedIn}
        />

        <div className={cn(
          'makeAnnouncement__createPlace',
          {
            'signedIn': signedIn
          }
        )}>
          <h1>Hello create announcement</h1>
        </div>
      </div>
    </div>
  )
}

export default CreateAnnouncement;
