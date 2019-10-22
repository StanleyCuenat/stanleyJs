# stanleyJs

A nice API framework for js lover

# Todo

## Server

    load Controller dynamically [DONE]
    load DAO dynamically [DONE]
    apply middleware for controller routing [DONE]
    basic parser for route [DONE]

## Controller

    create Controller [DONE]
    create next class / function [DONE]

## Request

    Request class (overwrite http.Incoming message) [DONE]
    Access to server context [DONE]

## Response

    Response class (overwrite http.Incoming message) [DONE]
    possibility to set basic variable inside [DONE]
    Set header content-type dynamically [ IN PROGRESS ]
        - for 200 success return only the data
        - then in core/server check the data type [ string, object, img whatever you wan't]
        - then set the good header

## middleware

    middleware Class [DONE]

# HTTP RESPONSE

    implement basic HTTP RESPONSE for an API [ DONE ]

## guardian update

    implement guardian for document modification [ MARSHALL ??]

## DAO

    implement DAO Interface and abstract class [DONE]
    implement Query builder for MongoDB and SQL

## DB

    implement abstract db [ DONE ]
    implement default database connection [DONE must be implemented manually]

## RESULT DATA FORMAT

    implement a good and generic result data format [ DONE ]

## Serialize Input

    Serialize object input to database OBJECT. [DONE WITH BASIC MARSHALL to Domain]
    Nested Object Marshalling [DONE]
    array Marshalling [ IN PROGRESS Really heavy to do with JS/TS in a easy way]
    Optional field check [IN PROGRESS MAYBE IMPOSSIBLE in a easy way FUCK JS FUCK TS]

## BASIC JSON / DATA PARSER

    # default JSON parser [DONE]

# FINAL GOAL

    The final goal is to create a typescript framework who already implement the Webmachine
    http://webmachine.github.io/
