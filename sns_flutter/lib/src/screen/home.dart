import 'package:flutter/material.dart';
import 'package:sns_flutter/src/widget/feed_item.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Mysns'),
      ),
      floatingActionButton: const FloatingActionButton(
        onPressed: null,
        child: Icon(Icons.create),
      ),
      body: ListView(
        children: const [
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
          FeedItem(),
        ],
      ),
    );
  }
}
