import React, { Component, PropTypes } from "react";
import { StyleSheet } from "react-native";

//Hier worden alle stijlen gedefinieerd voor in de app.
var styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#000000"
  },
  text: {
    color: "#A1A1A1",
    fontSize: 16,
    fontFamily: "regular",
    lineHeight: 20
  },
  cta: {
    color: "#A1A1A1",
    fontSize: 16,
    fontFamily: "bold",
    lineHeight: 20,
    paddingLeft: 8
  },
  intro: {
    color: "#A1A1A1",
    fontSize: 20,
    fontFamily: "regular"
  },
  h1: {
    color: "#fff",
    fontSize: 36,
    lineHeight: 48,
    fontFamily: "bold"
  },
  h2: {
    color: "#fff",
    fontFamily: "bold",
    fontSize: 20,
    lineHeight: 1.2
  },
  h3: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "bold"
  },
  paddingTitle: {
    paddingTop: 16,
    paddingBottom: 8
  },
  margin: {
    marginBottom: 30,
    zIndex: 10
  }
});

module.exports = styles;
