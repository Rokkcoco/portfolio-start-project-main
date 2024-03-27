import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabMenuProps} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/proj1.webp'
import timerImg from '../../../assets/images/proj2.webp'
import {Container} from '../../../components/Container';
import {S} from './Works_Styles'


const tabsItems: TabMenuProps['tabsItems'] = [
    {title: 'All', status: "all"},
    {title: 'landing page', status: "landing"},
    {title: 'React', status: "react"},
    {title: 'spa', status: "spa"},
]

const worksData = [
    {title: 'Social Network', text: 'Lorem', image: socialImg, type: 'spa'},
    {title: 'Timer', text: 'Lorem', image: timerImg, type: 'react'},
]
export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState('all')

    let filteredWorks = worksData

    if (currentFilterStatus === 'landing') {
        filteredWorks = worksData.filter(t => t.type === 'landing')
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}
                             wrap={'wrap'}> {/*flex-start чтобы убрать растягивание обоих элементов*/}
                    {filteredWorks.map(t => (
                        <Work key={t.title} title={t.title} text={t.text} src={t.image}/>
                    ))}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

