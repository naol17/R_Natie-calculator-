const styles = StyleSheet.create({

    results: {
        backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
        maxWidth: "100%",
        minHeight: "35%",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
      resultText: {
        maxHeight: 45,
        color: "#00b9d6",
        margin: 15,
        fontSize: 35,
      },
      historyText: {
        color: darkMode ? "#B5B7BB" : "#7c7c7c",
        fontSize: 20,
        marginRight: 10,
        alignSelf: "flex-end",
      },
      themeButton: {
        alignSelf: "flex-start",
        bottom: "5%",
        margin: 15,
        backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
      },
})