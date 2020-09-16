import * as React from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ListItem, Icon, withTheme } from 'material-bread'

import Heading from '~components/widgets/Heading'
import Button from '~components/widgets/Button'

import sharedStyles from '~config/sharedStyles'
import colors from '~config/colors'

const defaultQuestions = [
  {
    "category": "Entertainment: Video Games",
    "type": "boolean",
    "difficulty": "hard",
    "question": "Unturned originally started as a Roblox game.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ],
    "correct": false,
  }
]

interface QuestionResultProps {
  theme: any;
  question: any;
  text: string;
}

const QuestionResult = withTheme(({ theme, question, text }: QuestionResultProps) => {
  const iconName = question.correct ? 'check-circle' : 'cancel'
  return (
    <ListItem
      icon={<Icon name={iconName} size={30} color={colors.primary}/>}
      text={text}
    />
  )
})

function renderItem({ item, index }) {
  return (<QuestionResult key={item.question} question={item} text={item.question}/>)
}

const itemHeight = 68
function getItemLayout(data, index) {
  return { length: itemHeight, offset: itemHeight * index, index }
}

function keyExtractor(question) {
  return `${question.question}`
}

function Results({ navigation, questions = defaultQuestions }) {
  const goToIntro = React.useCallback(() => navigation.navigate('Intro'), [])
  return (
    <SafeAreaView style={[sharedStyles.screenPadding, sharedStyles.spaceBetweenVertically]}>
      <View>
        <Heading style={sharedStyles.textTitle} text="You scored" />
        <Heading style={sharedStyles.textTitle} text="3 / 10" />
      </View>
      <FlatList
        data={questions}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
      />
      <Button onPress={goToIntro} text="PLAY AGAIN?" />
    </SafeAreaView>
  )
}

export default Results