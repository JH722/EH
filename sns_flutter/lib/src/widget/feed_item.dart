import 'package:flutter/material.dart';
import 'package:sns_flutter/src/widget/my_profile.dart';

class FeedItem extends StatelessWidget {
  const FeedItem({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsetsDirectional.all(10),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const MyProfile(),
          const SizedBox(
            width: 10,
          ),
          Expanded(
              child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: const [
                  Text(
                    '홍길동',
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                  ),
                  SizedBox(
                    width: 10,
                  ),
                  Text('2023-01-19',
                      style: TextStyle(
                        fontSize: 12,
                        color: Colors.grey,
                      ))
                ],
              ),
              const SizedBox(
                height: 6,
              ),
              const Text(
                  '아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하오 아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하오 아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하오 아버지를 아버지라 부르지 못하고 형을 형이라 부르지 못하오 '),
            ],
          )),
        ],
      ),
    );
  }
}
