import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { pythonTasks } from '../../data/data'

const PythonTaskList = () => {
  return (
    <ScrollView>
        {pythonTasks.map((task) => {
            <TaskItem task={task} />
        })}
    </ScrollView>
  )
}

export default PythonTaskList