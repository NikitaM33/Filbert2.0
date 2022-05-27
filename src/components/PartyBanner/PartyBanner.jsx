import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import cn from 'classnames';

import { BlockHeader } from '@common';
import { AnimationPosition } from '../../helpers/AnimationPosition';
import birthdayStar from '@assets/icons/LightYellowStar.svg';
import party1 from '../../assets/PartyBlock/1.jpg';
import party2 from '../../assets/PartyBlock/2.jpg';
import party3 from '../../assets/PartyBlock/3.jpg';
import party4 from '../../assets/PartyBlock/4.jpg';
import party5 from '../../assets/PartyBlock/5.jpg';
import party6 from '../../assets/PartyBlock/6.jpg';
import party7 from '../../assets/PartyBlock/7.jpg';
import party8 from '../../assets/PartyBlock/8.jpg';
import party9 from '../../assets/PartyBlock/9.jpg';
import party10 from '../../assets/PartyBlock/10.jpg';

const PartyBanner = () => {
  const elemRef = useRef();
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {
      AnimationPosition(elemRef, 4, setIsAnimate)
    });

    isAnimate && gsap.fromTo('.shape', {
      scrollTrigger: '.partyBanner',
      opacity: 0,
      y: '-8%',
    },
    {
      delay: 1,
      duration: 5,
      y: '0',
      opacity: 1,
      ease: 'elastic',
      stagger: { each: 0.5 },
    });

    isAnimate && gsap.to('.floating', {
      delay: 4,
      duration: 3,
      y: '-8%',
      opacity: 1,
      ease: 'sine.inOut',
      stagger: { each: 0.3, yoyo: true, repeat: -1 },
    });
  }, [isAnimate]);

  return (
    <section
      ref={elemRef}
      className="partyBanner">
      <div className="wrapper">
        <div className="partyBanner__header">
          <BlockHeader
            yellow
            reverse
            textH3={'Дни рождения'}
            textH2={'Готовимся поздравлять своих коллег!'}
          />
        </div>
      </div>

      <div
        className="partyBanner__starsAndCircles">
        {/* Stars */}
        <div>
          <img src={birthdayStar} alt="Star" />
        </div>
        <div>
          <img src={birthdayStar} alt="Star" />
        </div>
        <div>
          <img src={birthdayStar} alt="Star" />
        </div>
        <div>
          <img src={birthdayStar} alt="Star" />
        </div>
        <div>
          <img src={birthdayStar} alt="Star" />
        </div>

        {/* Circles */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        {/* Round photos */}
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party1} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party2} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party3} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party8} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party4} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party5} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party9} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party6} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party7} alt="Party photo" />
        </div>
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <img src={party10} alt="Party photo" />
        </div>

        {/* Info circal */}
        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <p>Более <span>350</span></p>
          <p>штатных сотрудников</p>
          <p>которые стали частью большой семьи</p>
        </div>

        <div className={cn(
          'shape',
          {
            'floating': isAnimate
          }
        )}>
          <p>Около <span>1млн</span></p>
          <p>поздравлений</p>
          <p>от коллег в день рождения</p>
        </div>

        {/* Diagonal strips */}
        <div></div>
        <div></div>
      </div>
    </section>
  )
}

export default PartyBanner;
